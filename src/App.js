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

import { dpr, needsResize } from "./utils/three";

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

let ffts, iSignalPalette, iFFTPalette;

// three stuff
let renderer, camera, signalCamera, clock, composer, controls;

// instanced mesh
let iSignalMesh, iFFTMesh;

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
    camera = createCamera();
    camera.position.set(0, CAMERA_POSITION_Y, CAMERA_POSITION_Z);
    camera.lookAt(0, 0, 0);

    // separate orthographic camera for signal
    signalCamera = createOrthographicCamera(-20, 20, 15, -15, 0.1, 1000);
    signalCamera.position.set(SIGNAL_POSITION_X, 0, 10);
    signalCamera.lookAt(SIGNAL_POSITION_X, 0, 0);

    clock = new Clock();

    renderer = new WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(dpr);

    // controls
    controls = createControls(camera, canvas);

    // some lights;
    const [light1, light2] = createLights();
    this.scene.add(light1, light2);

    // post fx
    const renderPass = new RenderPass(this.scene, camera);
    const effectPass = new EffectPass(camera, ...createPostEffects());

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass, 0);
    composer.addPass(effectPass, 1);

    /**  NUM_FFT_SNAPSHOTS fft snapshots x FFT_SIZE = 
     *   NUM_FFT_SNAPSHOTS arrays (size = FFT_SIZE )
     *  Ogni istanza i deve mappare a:
        - fftIndex: quale snapshot (0.. NUM_FFT_SNAPSHOTS-1)
        - freqBin: quale frequency bin (0..FFT_SIZE/2)
     */
    ffts = getFFTs(NUM_FFT_SNAPSHOTS, FFT_SIZE);

    console.log(ffts.length * (FFT_SIZE / 2));

    iSignalPalette = getPalette("bone", FFT_SIZE).map((a) =>
      new Color().fromArray(a)
    );

    iFFTPalette = getPalette("viridis", FFT_SIZE / 2).map((a) =>
      new Color().fromArray(a)
    );

    // 1. INSTANCED MESH for signal
    iSignalMesh = new InstancedMesh2(
      new BoxGeometry(0.25, 0.25, 0.25),
      new MeshStandardMaterial({
        //emissive: 0x444444,
        //emissiveIntensity: 0.5,
      }),
      { capacity: FFT_SIZE, createEntities: true, allowsEuler: true }
    );
    iSignalMesh.position.set(SIGNAL_POSITION_X, 0, 0);
    iSignalMesh.scale.set(1, 0.5, 1);
    iSignalMesh.addInstances(FFT_SIZE, (obj, i) => {
      iSignalMesh.setColorAt(obj.id, iSignalPalette[i]);
    });

    this.signalScene.add(iSignalMesh);

    // 2. FFT MESH
    iFFTMesh = new InstancedMesh2(
      new BoxGeometry(0.45, 0.45, 0.45),
      new MeshStandardMaterial({
        color: 0xffffff,
        //emissive: 0xff2222,
        //emissiveIntensity: 0.3
      }),
      {
        capacity: ffts.length * (FFT_SIZE / 2),
        allowsEuler: true,
      }
    );

    iFFTMesh.addInstances(ffts.length * (FFT_SIZE / 2));

    this.scene.add(iFFTMesh);
  }

  intro() {
    // cinema veritè
    controls.rotateTo(MathUtils.degToRad(45), MathUtils.degToRad(55), true);
    controls.dollyTo(40, true);
    controls.truck(0, -30, true);

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
    const deltaTime = clock.getDelta();

    // https://threejs.org/manual/#en/responsive
    if (needsResize({ renderer, composer })) {
      const { clientWidth, clientHeight } = renderer.domElement;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }

    // get audio features
    const features = audioFeaturesExtractor.features(FFT_AUDIO_FEATURES);

    if (!features) return;

    // fill ffts spectrum buffers
    const { amplitudeSpectrum } = features;

    ffts.pop();
    ffts.unshift(amplitudeSpectrum);

    // get audio features
    Object.assign(audio, processAudioFeatures(features));

    const {
      loudness,
      perceptualSharpness,
      spectralKurtosis,
      perceptualSpread,
    } = audio;

    // make bloom reactive uh
    const [bloomEffect] = composer.passes[1].effects;
    bloomEffect.intensity = lerp(0.5, 4, loudness);
    bloomEffect.radius = lerp(0.5, 5.0, perceptualSharpness);

    // x -> frequency bins
    // Use logarithmic scale (Math.log10) to mirror human perception of frequency:
    // - Human hearing is logarithmic: we perceive frequency ratios, not differences
    // - Octaves (2:1 ratio) sound equally spaced regardless of absolute frequency
    // - Standard in audio: piano keys, musical scales, EQ bands, spectrum analyzers
    // - Linear FFT bins would compress low frequencies into tiny visual space
    // - Log scale gives bass/mids/treble proportional visual representation
    // Formula: xScale * (1 + log10((freqBin + 1) / (FFT_SIZE / 2)))
    iFFTMesh.updateInstances((obj, i) => {
      const fftIndex = getFFTIndex(i);

      const freqBin = i % (FFT_SIZE / 2);
      const fftValue = ffts[fftIndex][freqBin];

      obj.scale.set(
        4 + fftValue,
        4 + spectralKurtosis * 1,
        4 + perceptualSpread
      );

      obj.position.set(
        getFrequencyXPosition(freqBin, params.xscale),
        FFT_Y_OFFSET + fftValue * (params.amount * loudness),
        FFT_Z_BASE - fftIndex * (FFT_Z_STEP_MULTIPLIER * 1.0)
      );

      // high opacity for intense frequencies
      obj.opacity = Math.min(1, 0.1 + fftValue * 2.0);

      // Strong frequencies turn white
      /*  const whiteIntensity = Math.min(1, fftValue * 3.0);
      const originalColor = new Color(0xff0000);
      const whiteColor = new Color(0xffffff);
      const finalColor = originalColor.clone().lerp(whiteColor, whiteIntensity); */

      iFFTMesh.setColorAt(obj.id, 0xff0000);
    });

    // domain-time  via instancedgeometry
    const signal = audioFeaturesExtractor.signal();
    if (!!signal && iSignalMesh) {
      iSignalMesh.updateInstances((obj, i) => {
        obj.position.set(
          (SIGNAL_X_SCALE * i) / FFT_SIZE,
          signal[i] * SIGNAL_SCALE,
          0
        );

        /*  obj.rotation.set(
          (timestamp + loudness) * SIGNAL_ROTATION_SCALE,
          perceptualSharpness,
          0
        );  */

        /*   obj.scale.set(
          1 + spectralKurtosis * 2,
          loudness,
          perceptualSpread * 0.5
        ); */
      });
    }

    controls.update(deltaTime);

    /* 
    if (iSignalMesh && signalCamera) {
      renderer.render(this.signalScene, signalCamera);
    } */

    composer.render();

    stats.update();
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
          setAnimationLoopWithPause(renderer, this.render.bind(this), pause$);

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
