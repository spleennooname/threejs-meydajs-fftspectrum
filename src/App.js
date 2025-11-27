import gsap from "gsap";

import Stats from "stats.js";

import { Pane } from "tweakpane";

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
  DirectionalLight,
  Group,
  Mesh,
  Color,
  BufferGeometry,
  BoxGeometry,
  BufferAttribute,
  HemisphereLight,
} from "three";

import { InstancedMesh2 } from "@three.ez/instanced-mesh"

import { EffectComposer, RenderPass, BloomEffect, EffectPass } from "postprocessing";

import { getPalette, lerp } from "./utils";

import { AudioFeaturesExtractor } from "./AudioFeaturesExtractor";

import { pauseKey$, buttonStart$, renderWithPause$ } from "./utils/rx";
import { dpr, needsResize } from "./utils/three";
import {
  FFT_SIZE,
  NUM_FFT_LINES,
  FFT_Y_OFFSET,
  FFT_Z_BASE,
  FFT_Z_STEP_MULTIPLIER,
  getFFTs,
  processAudioFeatures,
} from "./audio";
import { createCamera, createFFTMaterial, createOrbitControls } from "./render";

const SPACEBAR_KEY_CODE = 32;

// Camera configuration constants
const CAMERA_POSITION_Y = -5;
const CAMERA_POSITION_Z = 10;

// Light configuration constants
const LIGHT_COLOR = 0xffffff;
const LIGHT_INTENSITY = 0.75;
const LIGHT_POSITION_Y = 1;
const LIGHT_POSITION_Z = 1;

// Bloom pass configuration constants
const BLOOM_THRESHOLD = 0.0;
const BLOOM_STRENGTH_BASE = 1.0;
const BLOOM_STRENGTH_MIN = 1;
const BLOOM_STRENGTH_MAX = 1.25;
const BLOOM_RADIUS_BASE = 1.2
const BLOOM_RADIUS_MIN = 1;
const BLOOM_RADIUS_MAX = 2.5;

// Signal visualization constants
const SIGNAL_SCALE = 30;
const SIGNAL_X_SCALE = 15;
const SIGNAL_ROTATION_SCALE = 1e-3;
const SIGNAL_POSITION_X = -8;

const audioFeaturesExtractor = new AudioFeaturesExtractor();

const btn = document.querySelector("#cover");
const canvas = document.querySelector("#canvas");

const stats = new Stats();
document.querySelector("#stats").appendChild(stats.dom);

let ffts, signalPalette;

let renderer, camera, composer, bloomEffect, controls;

let iSignalMesh, iFFTMesh, fftMeshes, irot = 0;

const params = {
  amount: 4,
  xscale: 50,
};

const audio = {
  loudness: 0,
  perceptualSharpness: 0,
  perceptualSpread: 0,
  spectralFlatness: 0,
  spectralKurtosis: 0,
};

const gui = new Pane({
  title: "controls",
  expanded: true,
});

gui.addInput(params, "amount", { min: 1, max: 6 });
gui.addInput(params, "xscale", { min: 20, max: 100 });

gui.addMonitor(audio, "loudness", {
  view: "graph",
  min: 0,
  max: 1,
});
gui.addMonitor(audio, "perceptualSpread", {
  view: "graph",
  min: 0,
  max: 1,
});
gui.addMonitor(audio, "perceptualSharpness", {
  view: "graph",
  min: 0,
  max: 1,
});
gui.addMonitor(audio, "spectralFlatness", {
  view: "graph",
  min: 0,
  max: 1,
});

gui.addMonitor(audio, "spectralKurtosis", {
  view: "graph",
  min: 0,
  max: 1,
});

export default class App {
  init() {
    this.scene = new Scene();

    camera = createCamera();
    camera.position.set(0, CAMERA_POSITION_Y, CAMERA_POSITION_Z);
    camera.lookAt(0, 0, 0);

    renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(dpr);

    controls = createOrbitControls(camera, canvas);
    controls.update();

    const hemiLight = new HemisphereLight(0xffffff, 0x000000, 1.)

    const directionalLight = new DirectionalLight(LIGHT_COLOR, LIGHT_INTENSITY);
    directionalLight.position.set(0, LIGHT_POSITION_Y, LIGHT_POSITION_Z);

    this.scene.add(hemiLight);
    this.scene.add(directionalLight);

    const renderPass = new RenderPass(this.scene, camera);

    bloomEffect = new BloomEffect({
      intensity: BLOOM_STRENGTH_BASE,
      luminanceThreshold: BLOOM_THRESHOLD,
      radius: BLOOM_RADIUS_BASE
    });

    const effectPass = new EffectPass(camera, bloomEffect);

    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(effectPass);

    ffts = getFFTs(NUM_FFT_LINES, FFT_SIZE);

    // check https://github.com/bpostlethwaite/colormap
    let colors = getPalette("picnic", ffts.length);

    signalPalette = getPalette("bone", FFT_SIZE).map((a) =>
      new Color().fromArray(a)
    );

    // 1. INSTANCED MESH for signal
    iSignalMesh = new InstancedMesh2(
      new BoxGeometry(0.25, 0.25, 0.25),
      new MeshStandardMaterial({ color: LIGHT_COLOR }),
      { capacity: FFT_SIZE, createEntities: true, allowsEuler: true}
    );
    iSignalMesh.position.set(SIGNAL_POSITION_X, 0, 0);
    iSignalMesh.scale.set(1, 0.5, 1);
    iSignalMesh.addInstances(FFT_SIZE, (obj, i) => {
      iSignalMesh.setColorAt(obj.id, signalPalette[i])
    }); 
    //console.log(iSignalMesh)
    // add istanced mesh for signal
    this.scene.add(iSignalMesh);

    // 2. FFT MESH
    iFFTMesh = new InstancedMesh2(
      new BoxGeometry(0.5, 0.5, 0.5),
      new MeshStandardMaterial({ color: 0xff0000 }),
      { capacity: ffts.length * (FFT_SIZE/2), createEntities: true, allowsEuler: true}
    );
    iFFTMesh.addInstances(ffts.length * ffts[0].length, (obj, i) => {
      const fftIndex = Math.floor(i / ffts[0].length);
      iFFTMesh.setColorAt(obj.id, 0xff0000)
    }); 
    this.scene.add(iFFTMesh);

    // add 
    /*fftMeshes = new Group();
    for (let i = 0; i < ffts.length; i++) {
      if (ffts[i]) {

        const fftGeom = new BufferGeometry();
        fftGeom.setAttribute(
          "position",
          new BufferAttribute(new Float32Array(ffts[i].length * 3), 3)
        );
        fftGeom.computeBoundingSphere();

        const fftMat = createFFTMaterial(colors[ffts.length - i - 1]);

        const mesh = new Mesh(fftGeom, fftMat);
        mesh.frustumCulled = false;

        fftMeshes.add(mesh);
      }
    }

    this.scene.add(fftMeshes);*/
  }

  /**
   * Handles the intro animation sequence
   * Uses GSAP to animate the cover element fade out
   */
  intro() {
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
   *
   * @param {Array} params - Render parameters
   * @param {Object} params[0] - First parameter object
   * @param {number} params[0].timestamp - Current timestamp for animations
   *
   * Processes:
   * - Audio features extraction (loudness, perceptualSharpness, etc.)
   * - FFT spectrum buffer updates and visualization
   * - Time-domain signal rendering via InstancedMesh
   * - Post-processing effects adjustment based on audio features
   */
  render([{ timestamp }]) {

    // https://threejs.org/manual/#en/responsive
    if (needsResize({ renderer, composer })) {
      const { clientWidth, clientHeight } = renderer.domElement;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }

    const features = audioFeaturesExtractor.features([
      "perceptualSharpness",
      "perceptualSpread",
      "spectralFlatness",
      "spectralKurtosis",
      "amplitudeSpectrum", // fft
      "loudness",
    ]);

    if (!features) return;

    const { amplitudeSpectrum } = features;

    // fill ffts spectrum buffers
    ffts.pop();
    ffts.unshift(amplitudeSpectrum);

    // Process audio features
    Object.assign(audio, processAudioFeatures(features));
    const { loudness, perceptualSharpness, spectralKurtosis, perceptualSpread } = audio;

    bloomEffect.intensity = lerp(BLOOM_STRENGTH_MIN, BLOOM_STRENGTH_MAX, loudness);
    bloomEffect.radius = lerp(
      BLOOM_RADIUS_MIN,
      BLOOM_RADIUS_MAX,
      perceptualSharpness
    );

    iFFTMesh.updateInstances((obj, i) => {
        
        const fftIndex = Math.floor(i / FFT_SIZE * 0.5);
        const freqBin = i % (FFT_SIZE * 0.5);

        obj.scale.set(
          ffts[fftIndex][freqBin],
          loudness,
          perceptualSpread
        ); 

        obj.position.set(
          params.xscale + params.xscale * Math.log10((freqBin + 1) / FFT_SIZE * 0.5),
          FFT_Y_OFFSET + audio.perceptualSharpness + ffts[fftIndex][freqBin] * (params.amount * loudness),
          FFT_Z_BASE - fftIndex * (FFT_Z_STEP_MULTIPLIER * 1.)//perceptualSpread)
        )
    })

    // render ffts
    /*for (let i = 0; i < ffts.length; i++) {
      const position = fftMeshes.children[i].geometry.getAttribute("position");
      for (let j = 0; j < position.count * 3; j++) {
        const index = j * 3;
        // x -> frequency bins
        // Use logarithmic scale (Math.log10) to mirror human perception of frequency:
        // - Human hearing is logarithmic: we perceive frequency ratios, not differences
        // - Octaves (2:1 ratio) sound equally spaced regardless of absolute frequency
        // - Standard in audio: piano keys, musical scales, EQ bands, spectrum analyzers
        // - Linear FFT bins would compress low frequencies into tiny visual space
        // - Log scale gives bass/mids/treble proportional visual representation
        // https://www.desmos.com/calculator/ss4rcedsl4
        position.array[index + 0] =
          params.xscale + params.xscale * Math.log10(j / ffts[i].length);
        // y -> magnitude
        position.array[index + 1] =
          FFT_Y_OFFSET +
          audio.perceptualSharpness +
          ffts[i][j] * (params.amount * loudness);
        position.array[index + 2] =
          FFT_Z_BASE - i * (FFT_Z_STEP_MULTIPLIER * perceptualSpread);
      }

      position.needsUpdate = true;
    }*/

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

        obj.scale.set(
          (1. + spectralKurtosis * 2.),
          loudness,
          perceptualSpread * 0.5
        ); 
      });
    }

    controls.update();

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
   * 4. Continuous render loop
   */
  run$() {
    // Start GSAP animation for cover element
    gsap.timeline().to("#cover", {
      duration: 2,
      autoAlpha: 1,
      ease: "expo.inOut",
    });

    // Combine observables
    return concat(
      combineLatest([
        buttonStart$(btn),
        from(audioFeaturesExtractor.meydaPromise({ fftSize: FFT_SIZE })),
      ]).pipe(
        retry({
          count: 2,
          delay: 1000,
        }),
        tap(() => {
          this.init();
          this.intro();
        })
      ),
      // Render with pause functionality
      renderWithPause$(pauseKey$(SPACEBAR_KEY_CODE)).pipe(
        tap(this.render)
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
