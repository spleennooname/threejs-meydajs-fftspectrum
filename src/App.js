import gsap from "gsap";

import Stats from "stats.js";

import { createGUI } from "./controls";

import {
  EMPTY,
  catchError,
  combineLatest,
  concat,
  from,
  retry,
  tap,
} from "rxjs";

import {
  BoxGeometry,
  Clock,
  Color,
  MathUtils,
  MeshStandardMaterial,
  Scene,
} from "three";

import { InstancedMesh2 } from "@three.ez/instanced-mesh";

import { EffectPass, RenderPass } from "postprocessing";

import { getPalette, lerp } from "./utils";

import { AudioFeaturesExtractor } from "./AudioFeaturesExtractor";

import { clickButton$, pauseKey$, setAnimationLoopWithPause } from "./utils/rx";

import {
  FFT_AUDIO_FEATURES,
  FFT_SIZE,
  FFT_Y_OFFSET,
  FFT_Z_BASE,
  FFT_Z_STEP_MULTIPLIER,
  NUM_FFT_SNAPSHOTS,
  getFFTIndex,
  getFFTs,
  getFrequencyXPosition,
  processAudioFeatures,
} from "./audio";

import {
  createCamera,
  createControls,
  createLights,
  createPostComposer,
  createPostEffects,
  createRenderer,
} from "./render";

const SPACEBAR_KEY_CODE = 32;
const HALF_FFT_SIZE = FFT_SIZE / 2;

// Camera configuration constants
const CAMERA_POSITION_Y = -5;
const CAMERA_POSITION_Z = 100;

// Signal visualization constants
const SIGNAL_SCALE = 30;
const SIGNAL_X_SCALE = 35;
const SIGNAL_Y_OFFSET = 35;

const audioFeaturesExtractor = new AudioFeaturesExtractor();

const btn = document.querySelector("#cover");
const canvas = document.querySelector("#canvas");
const statsDom = document.querySelector("#stats");

const stats = new Stats();
statsDom.appendChild(stats.dom);

const params = {
  amount: 5,
  xscale: 140,
  xpower: 1,
  xstep: 3,
  trailDecay: 0.97,
  trailPower: 100.0,
};

const audio = {
  loudness: 0,
  perceptualSharpness: 0,
  perceptualSpread: 0,
  spectralFlatness: 0,
  spectralKurtosis: 0,
};

createGUI(params, audio);

export default class App {
  init() {

    this.scene = new Scene();

    // main camera
    this.camera = createCamera();
    this.camera.position.set(0, CAMERA_POSITION_Y, CAMERA_POSITION_Z);
    this.camera.lookAt(0, 0, 0);

    this.clock = new Clock();

    this.renderer = createRenderer(canvas);

    // controls
    this.controls = createControls(this.camera, canvas);

    // some lights;
    const [light1, light2] = createLights();
    this.scene.add(light1, light2);

    // post fx
    const renderPass = new RenderPass(this.scene, this.camera);
    const effectPass = new EffectPass(this.camera, ...createPostEffects(this.camera));

    this.composer = createPostComposer(this.camera, this.renderer);
    this.composer.addPass(renderPass, 0);
    this.composer.addPass(effectPass, 1);

    /**  NUM_FFT_SNAPSHOTS fft snapshots x FFT_SIZE = 
     *   NUM_FFT_SNAPSHOTS arrays (size = FFT_SIZE )
     *  Ogni istanza i deve mappare a:
        - fftIndex: quale snapshot (0.. NUM_FFT_SNAPSHOTS-1)
        - freqIndexBin: quale frequency bin (0..FFT_SIZE/2)
     */
    this.ffts = getFFTs(NUM_FFT_SNAPSHOTS, FFT_SIZE);

    console.log(this.ffts.length * HALF_FFT_SIZE);

    this.iSignalPalette = getPalette("bone", FFT_SIZE).map((a) =>
      new Color().fromArray(a)
    );

    this.iFFTPalette = getPalette("viridis", HALF_FFT_SIZE).map((a) =>
      new Color().fromArray(a)
    );

    // 1. INSTANCED MESH for signal
    this.iSignalMesh = new InstancedMesh2(
      new BoxGeometry(0.5, 0.5, 0.5),
      new MeshStandardMaterial(),
      { capacity: FFT_SIZE, createEntities: true, allowsEuler: true }
    );
    this.iSignalMesh.addInstances(FFT_SIZE, (obj) => {
      this.iSignalMesh.setColorAt(obj.id, 0xffffff);
    });

    this.scene.add(this.iSignalMesh);

    // 2. FFT MESH
    this.iFFTMesh = new InstancedMesh2(
      new BoxGeometry(0.75, 0.75, 0.75),
      new MeshStandardMaterial({ color: 0xffffff, transparent: true }),
      {
        capacity: this.ffts.length * HALF_FFT_SIZE,
        allowsEuler: true,
      }
    );

    this.iFFTMesh.addInstances(this.ffts.length * HALF_FFT_SIZE, (obj) => {
      this.iFFTMesh.setOpacityAt(obj.id, 0.3);
    });

    this.scene.add(this.iFFTMesh);

    this.col = new Color();

    const resizeObserver = new ResizeObserver(() => this.resize());
    resizeObserver.observe(this.renderer.domElement);
  }

  async intro() {
    // cinema veritè
    this.controls.rotateTo(MathUtils.degToRad(30), MathUtils.degToRad(70), true);
    this.controls.dollyTo(80, true);
    this.controls.truck(20, -10, true);  

    gsap
      .timeline()
      .to("#cover", {
        duration: 1,
        autoAlpha: 0,
        ease: "power2.out",
      })
      .to("#cover", {
        duration: 1.0,
        delay: 1,
        autoAlpha: 0,
        ease: "power2.out",
      });
  }

  /**
   * Main render function called on each animation frame
   * - Audio features extraction (loudness, perceptualSharpness, etc.)
   * - FFT spectrum buffer updates and visualization
   * - Time-domain signal rendering via InstancedMesh
   * - Post-processing effects adjustment based on audio features
   */
  render() {

    const deltaTime = this.clock.getDelta();

    // get audio features
    const features = audioFeaturesExtractor.features(FFT_AUDIO_FEATURES);
    if (!features) return;

    // fill ffts spectrum buffers
    const { amplitudeSpectrum } = features;

    this.ffts.pop();
    this.ffts.unshift(amplitudeSpectrum);

    // get audio features
    Object.assign(audio, processAudioFeatures(features));

    const {
      loudness,
      perceptualSharpness,
      spectralKurtosis,
      perceptualSpread,
    } = audio;

    // make bloom reactive uh
    const [bloomEffect] = this.composer.passes[1].effects;
    bloomEffect.intensity = lerp(0.5, 2.75, loudness);
    bloomEffect.radius = lerp(0.5, 2.75, perceptualSharpness);

    // x -> frequency bins
    // Use logarithmic scale (Math.log10) to mirror human perception of frequency:
    // - Human hearing is logarithmic: we perceive frequency ratios, not differences
    // - Octaves (2:1 ratio) sound equally spaced regardless of absolute frequency
    // - Standard in audio: piano keys, musical scales, EQ bands, spectrum analyzers
    // - Linear FFT bins would compress low frequencies into tiny visual space
    // - Log scale gives bass/mids/treble proportional visual representation
    // Formula: xScale * (1 + log10((freqIndexBin + 1) / (FFT_SIZE / 2)))

    this.iFFTMesh.updateInstances((obj, i) => {

      const fftIndex = getFFTIndex(i);

      const freqIndexBin = i % HALF_FFT_SIZE;

      const fftValue = this.ffts[fftIndex][freqIndexBin];

      // Trail decay factor: newest snapshot = 1.0, oldest snapshot fades out
      const trailFactor = 1.0 - (fftIndex / NUM_FFT_SNAPSHOTS) * params.trailDecay;
   
      // decay curve for trail opacity: adjust exponent for sharper or softer trails
      const trailOpacity = Math.pow(trailFactor, 10);

      obj.scale.set(
        (4 + fftValue), 
        (4 + spectralKurtosis), 
        (2 + perceptualSpread + spectralKurtosis)
      );

      obj.position.set(
        getFrequencyXPosition(freqIndexBin, params.xscale, params.xpower, params.xstep),
        FFT_Y_OFFSET + fftValue * (params.amount * loudness),
        FFT_Z_BASE - fftIndex * FFT_Z_STEP_MULTIPLIER
      );

      this.col.set(trailFactor, (1 - lerp(0, 5, fftValue)) * trailFactor, 1.5);

      this.iFFTMesh.setOpacityAt(obj.id, trailOpacity );
      this.iFFTMesh.setColorAt(obj.id, this.col);
    });

    // domain-time  via instancedgeometry
    const signal = audioFeaturesExtractor.signal();
    if (signal && this.iSignalMesh) {
      this.iSignalMesh.updateInstances((obj, i) => {
        obj.position.set(
          -SIGNAL_X_SCALE / 2 + (SIGNAL_X_SCALE * i) / FFT_SIZE,
          SIGNAL_Y_OFFSET + signal[i] * SIGNAL_SCALE,
          0
        );

        obj.rotation.y += 1;
        /* obj.rotation.set(
          (timestamp + loudness) * SIGNAL_ROTATION_SCALE,
          perceptualSharpness,
          0
        );   */

        /*   obj.scale.set(
          1 + spectralKurtosis * 2,
          loudness,
          perceptualSpread * 0.5
        ); */
      });
    }

    this.controls.update(deltaTime);

    this.composer.render();

    stats.update();
  }

  resize() {
    const { clientWidth, clientHeight } = this.renderer.domElement;

    this.renderer.setSize(clientWidth, clientHeight, false); // dpr applied
    this.composer.setSize(clientWidth, clientHeight);

    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
  }

  /**
   * Main application entry point using RxJS observables
   *
   * @returns {Subscription} RxJS subscription for the application flow
   *
   * Orchestrates:
   * 1. Initial cover animation
   * 2. User button click + audio initialization
   * 3. Scene initialization and intro animation
   * 4. Continuous render loop with pause feature
   */
  run$() {
    // fadein cover
    gsap.timeline().to("#cover", {
      duration: 2,
      autoAlpha: 1,
      ease: "expo.inOut",
    });

    const pause$ = pauseKey$(SPACEBAR_KEY_CODE); // Spacebar

    // combine observables
    return concat(
      combineLatest([
        clickButton$(btn),
        from(audioFeaturesExtractor.meydaPromise({ fftSize: FFT_SIZE })),
      ]).pipe(
        retry({
          count: 2,
          delay: 1000,
        }),
        tap(() => {
          // init
          this.init();

          // start render loop
          setAnimationLoopWithPause(this.renderer, this.render.bind(this), pause$);

          // intro camera
          this.intro();
        })
      )
    )
      .pipe(
        catchError((error) => {
          console.error("Error:", error);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
