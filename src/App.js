import gsap from "gsap";

import * as THREE from "three";
import Stats from "stats.js";

import { Pane } from "tweakpane";

import {
  tap,
  concat,
  from,
  finalize,
  catchError,
  combineLatest,
  switchMap,
  retry,
  timer,
  EMPTY,
  shareReplay,
  takeUntil,
  Subject,
} from "rxjs";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Group,
  Object3D,
  Mesh,
  Color,
  BufferGeometry,
  BoxGeometry,
  BufferAttribute,
  InstancedMesh,
  Vector2,
  DynamicDrawUsage,
  DoubleSide,
  RawShaderMaterial,
  MeshLambertMaterial,
} from "three";

import { EffectComposer, RenderPass, BloomEffect, EffectPass } from "postprocessing";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { getFFTs, getPalette, invlerp, lerp } from "./utils";

import { fs, vs } from "./shaders/materials/line";

import { meydaPromise, features, signal, cleanup } from "./AudioFeaturesExtractor";

import { pauseKey$, buttonStart$, renderWithPause$ } from "./lib/rx";
import { dpr, needsResize } from "./lib/three";

const fftSize = 512;

const numLines = 45;

// Performance optimization constants
const RENDER_CONSTANTS = {
  FFT_Y_OFFSET: -15,
  FFT_Z_BASE: 15,
  FFT_Z_STEP_MULTIPLIER: 5,
  SIGNAL_SCALE: 30,
  SIGNAL_X_SCALE: 30,
  SIGNAL_ROTATION_SCALE: 1e-3,
  SIGNAL_SCALE_MULTIPLIER: 0.5
};

// Pre-calculated logarithmic values for performance
let preCalculatedLogValues = null;

// Performance optimization - dirty checking
let lastAudioState = {
  loudness: 0,
  perceptualSharpness: 0,
  perceptualSpread: 0,
  spectralFlatness: 0
};
let lastParams = { amount: 10, xscale: 50 };
const CHANGE_THRESHOLD = 0.001; // Minimum change to trigger update

// Cleanup management
const destroy$ = new Subject();

// Cleanup function for the entire app
function appCleanup() {
  console.log("App cleanup initiated");
  cleanup(); // Audio cleanup
  destroy$.next(true);
  destroy$.complete();
}

const btn = document.querySelector("#cover");
const canvas = document.querySelector("#canvas");

const stats = new Stats();
document.querySelector("#stats").appendChild(stats.dom);

let ffts, signalPalette;

let renderer, camera, composer, bloomEffect, controls, iSignalMesh, fftMeshes, iDummy, iColor;

const params = {
  amount: 10,
  xscale: 50,
};

const audio = {
  loudness: 0,
  perceptualSharpness: 0,
  perceptualSpread: 0,
  spectralFlatness: 0,
};

const gui = new Pane({
  title: "controls",
  expanded: true,
});

gui.addInput(params, "amount", { min: 1, max: 50 });
gui.addInput(params, "xscale", { min: 20, max: 100 });

gui.addMonitor(audio, "loudness", {
  view: "graph",
  min: 0,
  max: 1,
});
// 0 = not rich, 1 = very rich
gui.addMonitor(audio, "perceptualSpread", {
  view: "graph",
  min: 0,
  max: 1,
});
// 0 = not sharp, 1 very sharp
gui.addMonitor(audio, "perceptualSharpness", {
  view: "graph",
  min: 0,
  max: 1,
});
// 1= flat 0 = noisy
gui.addMonitor(audio, "spectralFlatness", {
  view: "graph",
  min: 0,
  max: 1,
});
// 1 = noisy, 0 = flat
/* gui.addMonitor(audio, "spectralKurtosis", {
  view: "graph",
  min: 0,
  max: 1,
});
 */
/* gui.on("change", () => {


})
 */

function init() {
  // Pre-calculate logarithmic values for performance optimization
  preCalculatedLogValues = new Float32Array(fftSize);
  for (let j = 0; j < fftSize; j++) {
    // Avoid log(0) which gives -Infinity, start from j+1
    const ratio = (j + 1) / fftSize;
    preCalculatedLogValues[j] = Math.log10(ratio);
  }

  // for instancedmesh computation
  iDummy = new Object3D();
  iColor = new Color();

  const scene = new Scene();

  camera = new PerspectiveCamera(75, 4 / 3, 5, 1e4);
  camera.position.set(0, -5, 10);
  camera.lookAt(0, 0, 0);

  renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(dpr);
  
  // Correct size initialization for postprocessing
  const w = canvas.clientWidth * dpr;
  const h = canvas.clientHeight * dpr;
  renderer.setSize(w, h, false);

  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.maxDistance = 25;
  controls.minDistance = 7;
  controls.dampingFactor = 5e-2;
  controls.minAzimuthAngle = -Math.PI / 1;
  controls.maxAzimuthAngle = Math.PI / 1;
  controls.minPolarAngle = 1;
  controls.maxPolarAngle = Math.PI / 2;
  controls.update();

  const directionalLight = new DirectionalLight(0xffffff, 0.75);
  directionalLight.position.set(0, 1, 1);

  scene.add(directionalLight);

  // Setup postprocessing pipeline with correct sizing
  composer = new EffectComposer(renderer);
  composer.setSize(w, h);

  // Create render pass first
  const renderPass = new RenderPass(scene, camera);
  
  // Create bloom effect with better performance
  bloomEffect = new BloomEffect({
    intensity: 3.0,
    luminanceThreshold: 0.0,
    luminanceSmoothing: 0.8,
    mipmapBlur: false,
  });
  
  const effectPass = new EffectPass(camera, bloomEffect);

  composer.addPass(renderPass);
  composer.addPass(effectPass);

  // Unchanging variables
  //const length = 1;
  //const hex = 0xffff00;
  //const dir = new Vector3(0, 1, 0);

  //const rightDir = new Vector3(1, 0, 0);
  //const origin = new Vector3(1, -5, -10);

  //let centroidArrow = new ArrowHelper(dir, origin, length, 0xffff00);
  //let rolloffArrow = new ArrowHelper(dir, origin, length, 0x00ff00);
  //let rmsArrow = new ArrowHelper(rightDir, origin, length, 0xff00ff);

  //const lineMaterial = new LineBasicMaterial({ color: 0x00fff0 });
  //const yellowMaterial = new LineBasicMaterial({ color: 0x00ffff });

  ffts = getFFTs(numLines, fftSize);

  // 1. INSTANCED MESH for signal
  iSignalMesh = new InstancedMesh(
    new BoxGeometry(1.0),
    new MeshLambertMaterial({ 
      color: 0xffffff,
      emissive: 0x111111,
      emissiveIntensity: 0.3
    }),
    fftSize
  );
  iSignalMesh.instanceMatrix.setUsage(DynamicDrawUsage);
  iSignalMesh.position.set(-10, 0, 0);
  iSignalMesh.scale.set(1, 1, 1);

  // get meshes color
  // check https://github.com/bpostlethwaite/colormap
  const paletteLabel = "picnic";

  let colors = getPalette(paletteLabel, ffts.length);

  signalPalette = getPalette(paletteLabel, fftSize).map(a => new Color().fromArray(a));

  signalPalette.forEach((c, i) => iSignalMesh.setColorAt(i, c));

  scene.add(iSignalMesh);

  // 2. group of meshes for fft spectrum
  fftMeshes = new Group();
  for (let i = 0; i < ffts.length; i++) {
    if (ffts[i]) {
      const fftGeom = new BufferGeometry();
      fftGeom.setAttribute(
        "position",
        new BufferAttribute(new Float32Array(ffts[i].length * 3), 3)
      );
      fftGeom.setDrawRange(0, ffts[i].length);
      //
      const fftMat = new RawShaderMaterial({
        uniforms: {
          uColor: {
            value: colors[ffts.length - i - 1],
          },
        },
        vertexShader: vs,
        fragmentShader: fs,
        transparent: true,
        side: DoubleSide,
      });
      //
      const mesh = new Mesh(fftGeom, fftMat);
      mesh.frustumCulled = false;
      //
      fftMeshes.add(mesh);
    }
  }

  scene.add(fftMeshes);

  console.log("init");
}

function intro() {
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

  console.log("intro");
}

function render([{ timestamp }]) {

  // https://threejs.org/manual/#en/responsive
  if (needsResize({ renderer, composer })) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    composer.setSize(canvas.clientWidth, canvas.clientHeight)
  }

  const audioFeatures = features([
    "perceptualSharpness",
    "perceptualSpread",
    "spectralFlatness",
    "amplitudeSpectrum", // fft
    "loudness",
  ]);

  if (!audioFeatures) return;

  // fill ffts spectrum buffers
  ffts.pop();
  ffts.unshift(audioFeatures.amplitudeSpectrum);

  const { perceptualSpread, perceptualSharpness, spectralFlatness } = audioFeatures;

  // Validate audio values to prevent NaN propagation
  const loudnessValue = audioFeatures.loudness?.total || 0;
  audio.loudness = Number.isFinite(loudnessValue) ? invlerp(3, 50, loudnessValue) : 0;
  audio.perceptualSharpness = Number.isFinite(perceptualSharpness) ? perceptualSharpness : 0;
  audio.perceptualSpread = Number.isFinite(perceptualSpread) ? perceptualSpread : 0;
  audio.spectralFlatness = Number.isFinite(spectralFlatness) ? spectralFlatness : 0;

  // affect blooming with perceptualSharpness / loudness (more aggressive values)
  bloomEffect.intensity = lerp(2.0, 5.0, audio.loudness);
  bloomEffect.luminanceSmoothing = lerp(0.5, 1.5, audio.perceptualSharpness);

  // render ffts - optimized loop with dirty checking
  const audioChanged = 
    Math.abs(audio.loudness - lastAudioState.loudness) > CHANGE_THRESHOLD ||
    Math.abs(audio.perceptualSharpness - lastAudioState.perceptualSharpness) > CHANGE_THRESHOLD ||
    Math.abs(audio.perceptualSpread - lastAudioState.perceptualSpread) > CHANGE_THRESHOLD;
  
  const paramsChanged = 
    params.amount !== lastParams.amount || 
    params.xscale !== lastParams.xscale;

  // Only update positions if there are significant changes or new FFT data
  if (audioChanged || paramsChanged || audioFeatures.amplitudeSpectrum) {
    for (let i = 0; i < ffts.length; i++) {

      const position = fftMeshes.children[i].geometry.getAttribute("position");
      const positionArray = position.array;
      const fftData = ffts[i];
      const zPosition = RENDER_CONSTANTS.FFT_Z_BASE - i * (RENDER_CONSTANTS.FFT_Z_STEP_MULTIPLIER * audio.perceptualSpread);
      const yOffset = RENDER_CONSTANTS.FFT_Y_OFFSET + audio.perceptualSharpness;
      const amplitudeScale = params.amount * audio.loudness;
      
      // Pre-calculate common values outside inner loop
      const xscaleBase = params.xscale;
      
      for (let j = 0; j < position.count; j++) {
        const index = j * 3;
        
        // x -> frequency bins (using pre-calculated log values)
        const xPos = xscaleBase + xscaleBase * preCalculatedLogValues[j];
        // y -> magnitude
        const yPos = yOffset + (fftData[j] || 0) * amplitudeScale;
        // z -> depth based on line index
        const zPos = zPosition;
        
        // Validate finite values to prevent NaN
        positionArray[index] = Number.isFinite(xPos) ? xPos : 0;
        positionArray[index + 1] = Number.isFinite(yPos) ? yPos : yOffset;
        positionArray[index + 2] = Number.isFinite(zPos) ? zPos : 0;
      }
      position.needsUpdate = true;
    }
    
    // Update last known state
    lastAudioState.loudness = audio.loudness;
    lastAudioState.perceptualSharpness = audio.perceptualSharpness;
    lastAudioState.perceptualSpread = audio.perceptualSpread;

    lastParams.amount = params.amount;
    lastParams.xscale = params.xscale;
  }

  // domain-time, instancedmesh - optimized with throttling
  const audioSignal = signal();
  if (audioSignal && iSignalMesh && (audioChanged || paramsChanged)) {
    const signalScale = RENDER_CONSTANTS.SIGNAL_SCALE;
    const signalXScale = RENDER_CONSTANTS.SIGNAL_X_SCALE;
    const rotationScale = RENDER_CONSTANTS.SIGNAL_ROTATION_SCALE;
    const scaleMultiplier = RENDER_CONSTANTS.SIGNAL_SCALE_MULTIPLIER;
    
    // Pre-calculate common values
    const rotationX = (timestamp + audio.loudness) * rotationScale;
    const rotationZ = audio.loudness;
    const scaleX = audio.loudness * scaleMultiplier;
    const scaleYZ = audio.perceptualSharpness * scaleMultiplier;
    
    for (let i = 0; i < fftSize; i++) {
      iDummy.position.set(
        (signalXScale * i) / fftSize, 
        audioSignal[i] * signalScale, 
        0
      );

      iDummy.rotation.set(rotationX, 0, rotationZ);
      iDummy.scale.set(scaleX, scaleYZ, scaleYZ);
      
      iDummy.updateMatrix();
      iColor.set(signalPalette[i]);

      iSignalMesh.setColorAt(i, iColor);
      iSignalMesh.setMatrixAt(i, iDummy.matrix);
    }
    
    iSignalMesh.instanceMatrix.needsUpdate = true;
    iSignalMesh.instanceColor.needsUpdate = true;
  }

  controls.update();

  composer.render();

  stats.update();
}

function run() {
  // Mostra l'interfaccia iniziale con animazione GSAP
  gsap.timeline().to("#cover", {
    duration: 2,
    autoAlpha: 1,
    ease: "expo.inOut",
  });

  // Stream di inizializzazione: combina click del bottone e setup audio
  const init$ = combineLatest([
    buttonStart$(btn), // Attende il click dell'utente
    from(meydaPromise({ fftSize })), // Richiede permessi microfono e inizializza Meyda
  ]).pipe(
    takeUntil(destroy$), // Cleanup automatico
    tap(() => init()), // Inizializza ThreeJS scene, camera, renderer
    finalize(() => intro()), // Nasconde il cover overlay
    //retry({ count: 3, delay: 1000 }), // Retry automatico su errori (es. permessi negati)
    /*catchError(error => {
      console.error("Error during initialization:", error);
      // Mostra messaggio di errore user-friendly e permette retry
      gsap.to("#cover", {
        duration: 0.5,
        autoAlpha: 1,
        onComplete: () => {
          btn.textContent = "Error: Click to retry";
          btn.style.backgroundColor = "#ff4444";
        },
      });
      return EMPTY; // Termina lo stream su errore irrecuperabile
    }),
    shareReplay(1) // Cache il risultato per evitare re-inizializzazioni*/
  );

  // Stream di rendering: gestisce il loop di animazione
  const render$ = renderWithPause$(pauseKey$(32)).pipe(
    takeUntil(destroy$), // Cleanup automatico
    tap(render), // Esegue il rendering della scena
   /*  catchError(() => {
      // Recovery automatico dal rendering con breve delay
      return timer(100).pipe(
        takeUntil(destroy$),
        switchMap(() => renderWithPause$(pauseKey$(32)))
      );
    }) */
  );

  // Concatena gli stream: prima inizializzazione, poi rendering continuo
  const subscription = concat(init$, render$).subscribe({
    error: error => console.error("App error:", error),
    complete: () => {
      console.log("App completed");
      appCleanup();
    }
  });

  return subscription;
}

export { run };
