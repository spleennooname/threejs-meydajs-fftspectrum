import gsap from "gsap";

import Stats from "stats.js";

import { createGUI } from "./ui";

import {
  tap,
  concat,
  from,
  catchError,
  combineLatest,
  retry,
  EMPTY,
} from "rxjs";

import {
  Scene,
  WebGLRenderer,
  MeshStandardMaterial,
  Color,
  BoxGeometry,
  MathUtils,
  Clock,
} from "three";

import { InstancedMesh2 } from "@three.ez/instanced-mesh";

import { EffectComposer, RenderPass, EffectPass } from "postprocessing";

import { getPalette, lerp } from "./utils";

import { AudioFeaturesExtractor } from "./AudioFeaturesExtractor";

import { pauseKey$, clickButton$, setAnimationLoopWithPause } from "./utils/rx";

import { dpr, needsResize, resizeCanvasToDisplaySize } from "./utils/three";

import {
  FFT_SIZE,
  NUM_FFT_SNAPSHOTS,
  FFT_Y_OFFSET,
  FFT_Z_BASE,
  FFT_Z_STEP_MULTIPLIER,
  getFFTs,
  FFT_AUDIO_FEATURES,
  getFFTIndex,
  processAudioFeatures,
  getFrequencyXPosition,
} from "./audio";

import {
  createCamera,
  createControls,
  createOrthographicCamera,
  createLights,
  createPostEffects,
} from "./render";

const SPACEBAR_KEY_CODE = 32;

// Camera configuration constants
const CAMERA_POSITION_Y = -5;
const CAMERA_POSITION_Z = 100;

// Signal visualization constants
const SIGNAL_SCALE = 30;
const SIGNAL_X_SCALE = 15;
const SIGNAL_POSITION_X = -8;

const audioFeaturesExtractor = new AudioFeaturesExtractor();

const btn = document.querySelector("#cover");
const canvas = document.querySelector("#canvas");

const stats = new Stats();
document.querySelector("#stats").appendChild(stats.dom);

const params = {
  amount: 5,
  xscale: 100,
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
    this.signalScene = new Scene();

    // main camera
    this.camera = createCamera();
    this.camera.position.set(0, CAMERA_POSITION_Y, CAMERA_POSITION_Z);
    this.camera.lookAt(0, 0, 0);

    // separate orthographic camera for signal
    this.signalCamera = createOrthographicCamera(-20, 20, 15, -15, 0.1, 1000);
    this.signalCamera.position.set(SIGNAL_POSITION_X, 0, 10);
    this.signalCamera.lookAt(SIGNAL_POSITION_X, 0, 0);

    this.clock = new Clock();

    this.renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(dpr);

    // controls
    this.controls = createControls(this.camera, canvas);

    // some lights;
    const [light1, light2] = createLights();
    this.scene.add(light1, light2);
    
    // Add lights to signal scene as well
    const [signalLight1, signalLight2] = createLights();
    this.signalScene.add(signalLight1, signalLight2);

    // post fx
    const renderPass = new RenderPass(this.scene, this.camera);
    const effectPass = new EffectPass(this.camera, ...createPostEffects());

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderPass, 0);
    this.composer.addPass(effectPass, 1);
    //this.composer.setSize(512, 512)
    /**  NUM_FFT_SNAPSHOTS fft snapshots x FFT_SIZE = 
     *   NUM_FFT_SNAPSHOTS arrays (size = FFT_SIZE )
     *  Ogni istanza i deve mappare a:
        - fftIndex: quale snapshot (0.. NUM_FFT_SNAPSHOTS-1)
        - freqBin: quale frequency bin (0..FFT_SIZE/2)
     */
    this.ffts = getFFTs(NUM_FFT_SNAPSHOTS, FFT_SIZE);

    console.log(this.ffts.length * (FFT_SIZE / 2));

    this.iSignalPalette = getPalette("bone", FFT_SIZE).map((a) =>
      new Color().fromArray(a)
    );

   this.iFFTPalette = getPalette("viridis", FFT_SIZE / 2).map((a) =>
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

    this.signalScene.add(this.iSignalMesh);

    // 2. FFT MESH
    this.iFFTMesh = new InstancedMesh2(
      new BoxGeometry(0.75, 0.75, 0.75),
      new MeshStandardMaterial({
        color: 0xffffff,
        //emissive: 0xff2222,
        //emissiveIntensity: 0.3
      }),
      {
        capacity: this.ffts.length * (FFT_SIZE / 2),
        allowsEuler: true,
      }
    );

    this.iFFTMesh.addInstances(this.ffts.length * (FFT_SIZE / 2));

    this.scene.add(this.iFFTMesh);

    const resizeObserver = new ResizeObserver(() => this.resize());
    resizeObserver.observe(this.renderer.domElement);
  }

  intro() {
    // cinema veritè
    this.controls.rotateTo(MathUtils.degToRad(45), MathUtils.degToRad(55), true);
    this.controls.dollyTo(40, true);
    this.controls.truck(0, -30, true);

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
    bloomEffect.intensity = lerp(0.5, 2.5, loudness);
    bloomEffect.radius = lerp(0.5, 2.0, perceptualSharpness);

    // x -> frequency bins
    // Use logarithmic scale (Math.log10) to mirror human perception of frequency:
    // - Human hearing is logarithmic: we perceive frequency ratios, not differences
    // - Octaves (2:1 ratio) sound equally spaced regardless of absolute frequency
    // - Standard in audio: piano keys, musical scales, EQ bands, spectrum analyzers
    // - Linear FFT bins would compress low frequencies into tiny visual space
    // - Log scale gives bass/mids/treble proportional visual representation
    // Formula: xScale * (1 + log10((freqBin + 1) / (FFT_SIZE / 2)))
    this.iFFTMesh.updateInstances((obj, i) => {
      const fftIndex = getFFTIndex(i);

      const freqBin = i % (FFT_SIZE / 2);
      const fftValue = this.ffts[fftIndex][freqBin];

      obj.scale.set(
        4.2 + fftValue,
        4.2 + spectralKurtosis * 1,
        4.2 + perceptualSpread
      );

      obj.position.set(
        getFrequencyXPosition(freqBin, params.xscale),
        FFT_Y_OFFSET + fftValue * (params.amount * loudness),
        FFT_Z_BASE - fftIndex * (FFT_Z_STEP_MULTIPLIER * 1.0)
      );

      // high opacity for intense frequencies
      obj.opacity = Math.min(1, 0.1 + fftValue * 2.0);

      // Interpolate color: red (low fftValue) to black (high fftValue)
      const normalizedValue = Math.min(0, fftValue * 4.0);
      const r = 1 - normalizedValue; // red component decreases as fftValue increases
      const finalColor = new Color(r, 0, 0);

      this.iFFTMesh.setColorAt(obj.id, finalColor);
    });

    // domain-time  via instancedgeometry
    const signal = audioFeaturesExtractor.signal();
    if (!!signal && this.iSignalMesh) {
      this.iSignalMesh.updateInstances((obj, i) => {
        obj.position.set(
          -10 +(SIGNAL_X_SCALE * i) / FFT_SIZE,
          signal[i] * SIGNAL_SCALE,
          0
        );

        obj.rotation.y += 1
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

    // 1. Main render - full viewport with FFT scene + post-processing
    const { clientWidth, clientHeight } = this.renderer.domElement;
    this.renderer.setViewport(0, 0, clientWidth, clientHeight);
    this.renderer.setScissor(0, 0, clientWidth, clientHeight);
    this.composer.render();

    // 2. Signal render - small viewport in bottom-right corner
    if (this.iSignalMesh && this.signalCamera) {
      const signalWidth = 400;
      const signalHeight = 200;
      const margin = 0;

      const x = clientWidth - signalWidth - margin;
      const y = margin;

      this.renderer.setViewport(x, y, signalWidth, signalHeight);
      this.renderer.setScissor(x, y, signalWidth, signalHeight);
      this.renderer.setScissorTest(true);

      // Render signal scene without post-processing
      this.renderer.render(this.signalScene, this.signalCamera);
      // Reset scissor test
      this.renderer.setScissorTest(false);
    }

    stats.update();
  }

  resize(){
      const {clientWidth, clientHeight} = this.renderer.domElement;

      this.renderer.setSize(clientWidth, clientHeight, false); // dpr applied
      this.composer.setSize(clientWidth, clientHeight);

      this.camera.aspect =clientWidth / clientHeight;
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
