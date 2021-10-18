

import gsap from 'gsap'

import Stats from 'stats.js'

// three

import {
  MathUtils,
  Scene,
  PerspectiveCamera,
  LineBasicMaterial,
  WebGLRenderer,
  DirectionalLight,
  Box3,
  ArrowHelper,
  Group,
  Line,
  Object3D,
  Mesh,
  Clock,
  Color,
  SphereBufferGeometry,
  BufferGeometry,
  BufferAttribute,
  InstancedMesh,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  Vector4,
  Vector2,
  Vector3,
  RawShaderMaterial,
  DynamicDrawUsage,
  ReinhardToneMapping,
  sRGBEncoding,
  DoubleSide,
  Quaternion,
  BoxBufferGeometry,
  Matrix4,
  MeshNormalMaterial,
  MeshLambertMaterial,
  BufferGeometryLoader
} from "three"

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//
import { getFFTs, getPalette, lerp, invlerp } from "./utils"
//
import { fs, vs } from './materials/line'
//
import AudioExtractor from './AudioExtractor'

// ----------------------------------------------------

const bufferSize = 512;
const numLines = 50;
const aspectRatio = 4 / 3;

// ----------------------------------------------------

// for instancedmesh computation
let imesh, imesh2, dummy = new Object3D(), matrix = new Matrix4(), position = new Vector3()

//

const stats = new Stats();
document.body.appendChild(stats.dom);

const pixelRatio = Math.min(window.devicePixelRatio, 1.5)

const scene = new Scene();

const clock = new Clock();

const camera = new PerspectiveCamera(75, aspectRatio, 5, 100);
camera.position.set(0, -5, 5);
camera.lookAt(0, 0, 0);

const lineMaterial = new LineBasicMaterial({
  color: 0x00fff0,
});

const yellowMaterial = new LineBasicMaterial({
  color: 0x00ffff,
});

let w = canvas.clientWidth * pixelRatio
let h = canvas.clientHeight * pixelRatio

let resolution = new Vector2(w, h)

let renderer = new WebGLRenderer({
  canvas,
  antialias: false,
  depth: false,
  stencil: false,
  alpha: true,
  powerPreference: "high-performance"
});
renderer.outputEncoding = sRGBEncoding
renderer.toneMapping = ReinhardToneMapping;
renderer.setPixelRatio(pixelRatio);
renderer.setClearColor(0x000000, 1);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.enablePan = false
controls.maxDistance = 15;
controls.minDistance = 7;
controls.dampingFactor = 5e-2
// x
controls.minAzimuthAngle = - Math.PI / 2
controls.maxAzimuthAngle = Math.PI / 2
// y
controls.minPolarAngle = 1
controls.maxPolarAngle = Math.PI / 2
controls.update();

const renderPass = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(resolution, 0, 0, 0);
bloomPass.threshold = 0.0
bloomPass.strength = 1.75;
bloomPass.radius = 1.5;

const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);
bloomPass.renderToScreen = true;

let directionalLight = new DirectionalLight(0xffffff, 0.75);
directionalLight.position.set(0, 1, 1);

// Unchanging variables
const length = 1;
const hex = 0xffff00;
const dir = new Vector3(0, 1, 0);

const rightDir = new Vector3(1, 0, 0);
const origin = new Vector3(1, -5, -10);
//
let centroidArrow = new ArrowHelper(dir, origin, length, 0xffff00);
let rolloffArrow = new ArrowHelper(dir, origin, length, 0x00ff00);
let rmsArrow = new ArrowHelper(rightDir, origin, length, 0xff00ff);

// SETUP FFTS

// init ffts
let ffts = getFFTs(numLines, bufferSize);
// get meshes color
let colors = getPalette('night', ffts.length)

const fftMat = new RawShaderMaterial({
  uniforms: {
    color: { value: colors[3] }
  },
  vertexShader: vs,
  fragmentShader: fs,
  transparent: true,
  side: DoubleSide
});

const fftMat2 = new MeshNormalMaterial()
const fftMat3 = new MeshLambertMaterial({ color: 0xff0000 })

// 1. INSTANCED MESH (test)

const baseGeom = new BoxBufferGeometry(0.05)
imesh = new InstancedMesh(baseGeom, fftMat2, bufferSize);
imesh.instanceMatrix.setUsage(DynamicDrawUsage);
imesh.position.set(-10, 0, 10)
scene.add(imesh);


// 2. INSTANCED MESH
 
const fftGeom = new BufferGeometry();
fftGeom.setAttribute("position", new BufferAttribute(new Float32Array(bufferSize * 3), 3));
fftGeom.setDrawRange(0, bufferSize);
imesh2 = new InstancedMesh(fftGeom, new MeshNormalMaterial(), numLines);
imesh2.instanceMatrix.setUsage(DynamicDrawUsage);
imesh2.position.set(0,0,0)
imesh2.meshPerAttribute= numLines
console.log(imesh2)
// 3.

let fftMeshes = new Group();
for (let i = 0; i < ffts.length; i++) {
  if (ffts[i]) {
    //
    const fftGeom = new BufferGeometry();
    fftGeom.setAttribute("position", new BufferAttribute(new Float32Array(ffts[i].length * 3), 3));
    fftGeom.setDrawRange(0, ffts[i].length);
    //
    const lineFFTMaterial = new RawShaderMaterial({
      uniforms: {
        color: {
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
bufferLineGeometry.setAttribute("position", new BufferAttribute(new Float32Array(bufferSize * 3), 3));
bufferLineGeometry.setDrawRange(0, bufferSize); */

// add to scene
scene.add(directionalLight);

scene.add(centroidArrow);
scene.add(rolloffArrow);
scene.add(rmsArrow);
//scene.add(bufferLine);
scene.add(fftMeshes);

// methods

const resizeIfNeed = () => {
  const canvas = renderer.domElement;
  let w = Math.floor(canvas.clientWidth * pixelRatio);
  let h = Math.floor((canvas.clientWidth * pixelRatio) / aspectRatio)
  const needResize = canvas.width !== w || canvas.height !== h;
  if (needResize) {
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = aspectRatio;
    camera.updateProjectionMatrix();
  }
}

const render = () => {
  //
  resizeIfNeed();

  const time = performance.now();
  //
  const features = audio.features();
  const signal = audio.signal();

  if (!!features) {
    // fill ffts spectrum buffers
    ffts.pop();
    ffts.unshift(features.amplitudeSpectrum);
    // 
    const loudness = invlerp(7, 40, features.loudness.total)
    const sharpness = features.perceptualSharpness //invlerp(0.7, 4, features.perceptualSharpness)
    // affect blooming with sharpness and loudness 
    bloomPass.strength = lerp(1, 1.7, loudness)
    bloomPass.radius = lerp(1, 2.2, sharpness)

    //console.time('loop')
    for (let i = 0; i < ffts.length; i++) {
      const geom = fftMeshes.children[i].geometry
      for (let j = 0; j < ffts[i].length * 3; j++) {
        let index = j * 3;
        geom.attributes.position.array[index + 0] = +40.0 + 40 * Math.log10(j / ffts[i].length);
        geom.attributes.position.array[index + 1] = -10. + sharpness + (ffts[i][j]) * loudness;
        geom.attributes.position.array[index + 2] = +15 - i * 1.1
      }
      geom.attributes.position.needsUpdate = true;
    }

    for (let i = 0; i < ffts.length; i++) {
      for (let j = 0; j < ffts[i].length * 3; j++) {
        dummy.position.set(
          40.0 + 40 * Math.log10(j / ffts[i].length),
          -10. + sharpness + (ffts[i][j]) * loudness,
          +15 - i * 1.1
        );
        dummy.updateMatrix();
      }
      imesh2.setMatrixAt(i, dummy.matrix);
    }
    imesh2.instanceMatrix.needsUpdate = true

    // render Spectral Centroid arrow
    if (features.spectralCentroid) {
      centroidArrow.position.set(
        12 + 8 * Math.log10(features.spectralCentroid / (bufferSize / 2)),
        -6,
        -15
      );
    }

    // render spectral rolloff arrow
    if (features.spectralRolloff) {
      let rolloff = features.spectralRolloff / 22050;
      rolloffArrow.position.set(
        12 + 8 * Math.log10(rolloff),
        -6,
        -15
      );
    }

    // render rms arrow
    if (features.rms) {
      rmsArrow.position.set(
        -11,
        -5 + 10 * features.rms,
        -15
      );
    }

    /* const bl = bufferLine.geometry.attributes.position
    if (!!signal) {
      for (let i = 0; i < bufferSize; i++) {
        let index = i * 3
        bl.array[index] = -11 + (22 * i) / bufferSize;
        bl.array[index + 1] = 4 + signal[i] * 5;
        bl.array[index + 2] = -25;
      }
      bl.needsUpdate = true;
    }
 */
    if (!!signal && imesh) {
      for (let i = 0; i < bufferSize; i++) {
        dummy.position.set(
          -11 + (40 * i) / bufferSize,
          4 + signal[i] * 5,
          -25
        );
        dummy.rotation.set(
          MathUtils.degToRad((loudness * i* 2) + time * 1e-4),
          0,
          0
        )
        /* dummy.scale.set(
          sharpness,
          sharpness,
          sharpness 
        ) */
        dummy.updateMatrix();
        imesh.setMatrixAt(i, dummy.matrix);
      }
      imesh.instanceMatrix.needsUpdate = true
    }

  }
  //
  controls.update()
  //
  composer.render();
  //renderer.render(scene, camera)
  // 
  stats.update()
}

const tick = () => {
  render()
  requestAnimationFrame(tick);
}

// start the thing

const audio = new AudioExtractor({
  bufferSize,
  onComplete: audioExtractor => {

    //const startOrientation = camera.quaternion.clone();
    //const targetOrientation = new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), Math.PI / 2);

    tl.to('#cover', {
      duration: 1.0,
      autoAlpha: 0,
      right: "10px",
      ease: 'power2.out',
      onComplete: () => { }
    });
    /* tl.to({}, {
      duration: 5.0,
      ease: 'power2.out',
      onUpdate: function () {
        camera.quaternion
          .copy(startOrientation)
          .slerp(targetOrientation, this.progress());
      }
    }, "-=0.8"); */
    tick()
  }
})

const btn = document.querySelector("#cover")
const tl = gsap.timeline()
tl.to('#cover', {
  duration: 2,
  autoAlpha: 1,
  left: "-20px",
  ease: 'expo.out',
  onComplete: () => { }
})

btn.addEventListener('click', e => audio.start(), { once: true })

/* var loader = new BufferGeometryLoader();
loader.load('https://threejs.org/examples/models/json/suzanne_buffergeometry.json',
  geometry => {
    geometry.computeVertexNormals();
    geometry.scale(1, 1, 1);

    imesh = new InstancedMesh(geometry, new MeshNormalMaterial(), numLines);
    imesh.instanceMatrix.setUsage(DynamicDrawUsage);
    imesh.position.set(-10, 0, -20)
    scene.add(imesh);

    for (let i = 0; i < 5; i++) {
      dummy.position.set(i * 5, 0, 0);
      dummy.updateMatrix();
      imesh.setMatrixAt(i, dummy.matrix);
    }

  }
) */