
import gsap from "gsap"

import Stats from "stats.js"

import {
  tap,
  concat, 
  forkJoin, 
  finalize,
  combineLatest,
} from "rxjs";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  //ArrowHelper,
  Group,
  Object3D,
  Mesh,
  Color,
  BufferGeometry,
  BoxBufferGeometry,
  BufferAttribute,
  InstancedMesh,
  Vector2,
  //Vector3,
  DynamicDrawUsage,
  DoubleSide,
  RawShaderMaterial,
  MeshLambertMaterial
} from "three"

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
//
import { getFFTs, getPalette, lerp, dpr, invlerp } from "./utils"
//
import { fs, vs } from "./materials/line"

import { AudioFeaturesExtractor } from "./AudioFeaturesExtractor"

import { resizeObserver$, resize$, pauseKey$, buttonStart$, render$ } from "./lib";

const audioFeaturesExtractor = new AudioFeaturesExtractor();

gsap.to("#cover", {
  duration: 2,
  autoAlpha: 1,
  ease: "expo.inOut"
})

const stats = new Stats();
document.body.appendChild(stats.dom);

const fftSize = 512;

const numLines = 40;

const aspectRatio = 4 / 3;

// check https://github.com/bpostlethwaite/colormap
const paletteLabel = "picnic"

// for instancedmesh computation
let iSignalMesh,
  dummy = new Object3D(),
  color = new Color();

const pixelRatio = dpr

const scene = new Scene();

const camera = new PerspectiveCamera(75, aspectRatio, 5, 1e4);
camera.position.set(0, -5, 10);
camera.lookAt(0, 0, 0);

const btn = document.querySelector("#cover")

const canvas = document.querySelector("#canvas")

let renderer = new WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: "high-performance"
});
renderer.setPixelRatio(pixelRatio);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.enablePan = false
controls.maxDistance = 25;
controls.minDistance = 7;
controls.dampingFactor = 5e-2
// x
controls.minAzimuthAngle = - Math.PI / 1
controls.maxAzimuthAngle = Math.PI / 1
// y
controls.minPolarAngle = 1
controls.maxPolarAngle = Math.PI / 2
controls.update();

let directionalLight = new DirectionalLight(0xffffff, 0.75);
directionalLight.position.set(0, 1, 1);

scene.add(directionalLight);

const renderPass = new RenderPass(scene, camera);

let w = canvas.clientWidth * pixelRatio
let h = canvas.clientHeight * pixelRatio
let resolution = new Vector2(w, h)

const bloomPass = new UnrealBloomPass(resolution, 0, 0, 0);
bloomPass.threshold = 0.0
bloomPass.strength = 1.75;
bloomPass.radius = 1.5;

const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);

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

// fft

let ffts = getFFTs(numLines, fftSize);

// get meshes color
let colors = getPalette(paletteLabel, ffts.length)

/* const fftMat = new RawShaderMaterial({
  uniforms: {
    uColor: { value: new Color(1, 1, 1) }
  },
  vertexShader: vs,
  fragmentShader: fs,
  transparent: true,
  side: DoubleSide
}); */

const fftMat = new MeshLambertMaterial({ color: 0xffffff })

// 1. INSTANCED MESH for signal
const baseGeom = new BoxBufferGeometry(0.25)

iSignalMesh = new InstancedMesh(baseGeom, fftMat, fftSize);
iSignalMesh.instanceMatrix.setUsage(DynamicDrawUsage);
iSignalMesh.position.set(-8, 0, 0)
iSignalMesh.scale.set(1, 1, 1)

const signalPalette = getPalette(paletteLabel, fftSize)
  .map(a => new Color().fromArray(a))

signalPalette
  .forEach((c, i) => iSignalMesh.setColorAt(i, c));

scene.add(iSignalMesh);

// 2. group of meshes for fft spectrum
let fftMeshes = new Group();
for (let i = 0; i < ffts.length; i++) {
  if (ffts[i]) {
    //
    const fftGeom = new BufferGeometry();
    fftGeom.setAttribute("position", new BufferAttribute(new Float32Array(ffts[i].length * 3), 3));
    fftGeom.setDrawRange(0, ffts[i].length);
    //
    const fftMat = new RawShaderMaterial({
      uniforms: {
        uColor: {
          value: colors[ffts.length - i - 1]
        }
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
      side: DoubleSide
    });
    //
    const mesh = new Mesh(fftGeom, fftMat);
    mesh.frustumCulled = false
    //
    fftMeshes.add(mesh);
  }
}

scene.add(fftMeshes);

resize()

// buffer line material
/* const bufferLineMaterial = new RawShaderMaterial({
  uniforms: {
    color: { value: colors[Math.floor(ffts.length / 2)] }
  },
  vertexShader: vs,
  fragmentShader: fs,
  transparent: true
});
let bufferLineGeometry = new BufferGeometry();
let bufferLine = new Line(bufferLineGeometry, bufferLineMaterial);
bufferLineGeometry.setAttribute("position", new BufferAttribute(new Float32Array(fftSize * 3), 3));
bufferLineGeometry.setDrawRange(0, fftSize); */
// scene.add(centroidArrow);
// scene.add(rolloffArrow);
// scene.add(rmsArrow);

concat(

  combineLatest([
    buttonStart$(btn),
    audioFeaturesExtractor.meyda$({ fftSize })
  ])
    .pipe(finalize(() => show())),

  forkJoin({
    
    "resize": resize$(canvas)
      .pipe(tap(resize)),

    "render": render$( pauseKey$(32), 80)
      .pipe(tap(render))
  })
)
.subscribe()

// functions

function show(){
  gsap
    .timeline()
    .to(btn, {
      duration: 1.,
      autoAlpha: 0,
      ease: "power2.out"
    })
    .to("#cover", {
      duration: 1.0,
      delay: 1.,
      autoAlpha: 0,
      ease: "power2.out"
    });
}

function resize() {

  const { clientWidth, clientHeight } = renderer.domElement;

  let w = Math.floor((clientWidth) * pixelRatio);
  let h = Math.floor((clientHeight) * pixelRatio);

  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  renderer.setSize(w, h);
  composer.setSize(w, h);
}

function render([{ timestamp }]) {

  if (!audioFeaturesExtractor) return

  const features = audioFeaturesExtractor.features();

  if (!features) return

  const signal = audioFeaturesExtractor.signal();

  // fill ffts spectrum buffers
  ffts.pop();
  ffts.unshift(features.amplitudeSpectrum);

  const loudness = invlerp(7, 40, features.loudness.total)
  const rms = features.rms
  const sharpness = features.perceptualSharpness //invlerp(0.7, 4, features.perceptualSharpness)

  // affect blooming with sharpness and loudness 
  bloomPass.strength = lerp(1, 1.25, loudness)
  bloomPass.radius = lerp(1, 2.5, sharpness)

  // render ffts
  for (let i = 0; i < ffts.length; i++) {
    const geom = fftMeshes.children[i].geometry
    const position = geom.getAttribute("position")
    //console.log(geom.attributes.position.count)
    for (let j = 0; j < position.count * 3; j++) {
      const index = j * 3;
      // freq
      position.array[index + 0] = +40.0 + 40 * Math.log10(j / ffts[i].length);

      position.array[index + 1] = -10. + 0.5 + sharpness + 0.5 + (ffts[i][j]) * (1.5 * loudness + rms);
      position.array[index + 2] = +15 - i * 1.1
    }
    position.needsUpdate = true;
  }

  // render Spectral Centroid arrow
  /*  if (features.spectralCentroid) {
     centroidArrow.position.set(
       12 + 8 * Math.log10(features.spectralCentroid / (fftSize / 2)),
       -6,
       -15
     );
   } */

  // render spectral rolloff arrow
  /* if (features.spectralRolloff) {
    let rolloff = features.spectralRolloff / 22050;
    rolloffArrow.position.set(
      12 + 8 * Math.log10(rolloff),
      -6,
      -15
    );
  } */

  // render rms arrow
  /* if (features.rms) {
    rmsArrow.position.set(
      -11,
      -5 + 10 * features.rms,
      -15
    );
  } */

  /* const bl = bufferLine.geometry.attributes.position
  if (!!signal) {
    for (let i = 0; i < fftSize; i++) {
      let index = i * 3
      bl.array[index] = -11 + (22 * i) / fftSize;
      bl.array[index + 1] = 4 + signal[i] * 5;
      bl.array[index + 2] = -25;
    }
    bl.needsUpdate = true;
  }
*/
  // domain-time spectrum via instancedgeometry
  if (!!signal && iSignalMesh) {
    for (let i = 0; i < fftSize; i++) {
      dummy.position.set(
        (15 * i) / fftSize,
        signal[i] * 10,
        0
      );
      dummy.rotation.set(
        (timestamp + loudness) * 1e-3,
        0,
        loudness
      )
      dummy.scale.set(
        sharpness * 0.2,
        sharpness * 0.2,
        sharpness * 0.2
      )
      dummy.updateMatrix();
      color.set(signalPalette[i])
      iSignalMesh.setColorAt(i, color)
      iSignalMesh.setMatrixAt(i, dummy.matrix);
    }
    iSignalMesh.instanceMatrix.needsUpdate = true
    iSignalMesh.instanceColor.needsUpdate = true
  }

  controls.update()

  composer.render();

  stats.update()
}