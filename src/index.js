

import gsap from 'gsap'

import Stats from 'stats.js'

// three

import {
  Scene,
  SplineCurve,
  PerspectiveCamera,
  LineBasicMaterial,
  WebGLRenderer,
  DirectionalLight,
  ReinhardToneMapping,
  Box3,
  sRGBEncoding,
  ArrowHelper,
  Group,
  Mesh,
  Clock,
  Color,
  BufferGeometry,
  BufferAttribute,
  InstancedBufferGeometry,
  InstancedBufferAttribute,
  Vector4,
  Vector2,
  Vector3,
  RawShaderMaterial,
  DynamicDrawUsage,
  Line,
  DoubleSide,
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

// 

const bufferSize = 1024;
const numLines = 60;
const aspectRatio = 16 / 9;

let ffts = getFFTs(numLines, bufferSize);
let colorMap = getPalette('night', ffts.length)

const stats = new Stats();
document.body.appendChild(stats.dom);

let pixelRatio = Math.min(window.devicePixelRatio, 1.5)

// threejs stuff

let scene = new Scene();

const clock = new Clock();



let camera = new PerspectiveCamera(75, aspectRatio, 5, 100);
camera.position.set(0, -5, 10);
camera.lookAt( 0, 0, 0 );

let lineMaterial = new LineBasicMaterial({
  color: 0x00fff0,
});

let yellowMaterial = new LineBasicMaterial({
  color: 0x00ffff,
});

let w = canvas.clientWidth * pixelRatio
let h = canvas.clientHeight * pixelRatio

let resolution = new Vector2(w, h)

let renderer = new WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
});
renderer.outputEncoding = sRGBEncoding
renderer.toneMapping = ReinhardToneMapping;
renderer.setPixelRatio(pixelRatio);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.enablePan = false
controls.maxDistance = 15;
controls.minDistance = 7;
// x
controls.minAzimuthAngle = - Math.PI / 8
controls.maxAzimuthAngle = Math.PI / 8
// y
controls.minPolarAngle = 1
controls.maxPolarAngle = Math.PI / 2
controls.update();

const params = {
  exposure: 1,
  bloomStrength: 1.75,
  bloomThreshold: 0.0,
  bloomRadius: 1.4
};

const renderPass = new RenderPass(scene, camera);

const bloomPass = new UnrealBloomPass(resolution, 0, 0, 0);
bloomPass.threshold = params.bloomThreshold;
bloomPass.strength = params.bloomStrength;
bloomPass.radius = params.bloomRadius;

const composer = new EffectComposer(renderer);
composer.addPass(renderPass);
composer.addPass(bloomPass);
bloomPass.renderToScreen = true;

//console.log(bloomPass)
//let directionalLight = new DirectionalLight(0xffffff, 0.75);
//directionalLight.position.set(0, 1, 1);

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

// init FFTs lines

let lines = new Group();
for (let i = 0; i < ffts.length; i++) {
  if (ffts[i]) {
    //
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(new Float32Array(ffts[i].length * 3), 3));
    geometry.computeVertexNormals();
    geometry.setDrawRange(0, ffts[i].length);
    //
    const lineFFTMaterial = new RawShaderMaterial({
      uniforms: {
        color: {
          value: colorMap[ffts.length - i - 1]
        }
      },
      vertexShader: vs,
      fragmentShader: fs,
      transparent: true,
      side: DoubleSide
    });
    //
    const line = new Mesh(geometry, lineFFTMaterial);
    //
    lines.add(line);
  }
}

/* iLine = new InstancedMesh( geometry, material, ffts.length );
iLine.instanceMatrix.setUsage( DynamicDrawUsage );
geometry.computeVertexNormals(); */

// buffer line material
const bufferLineMaterial = new RawShaderMaterial({
  uniforms: {
    color: { value: colorMap[Math.floor(ffts.length / 2)] }
  },
  vertexShader: vs,
  fragmentShader: fs,
  transparent: true
});
let bufferLineGeometry = new BufferGeometry();
let bufferLine = new Line(bufferLineGeometry, bufferLineMaterial);
bufferLineGeometry.setAttribute("position", new BufferAttribute(new Float32Array(bufferSize * 3), 3));
bufferLineGeometry.setDrawRange(0, bufferSize);

// add to scene
//scene.add(directionalLight);

scene.add(centroidArrow);
scene.add(rolloffArrow);
scene.add(rmsArrow);
scene.add(bufferLine);
scene.add(lines);

const resizeIfNeed = () => {
  const canvas = renderer.domElement;
  let w = Math.floor(canvas.clientWidth * pixelRatio);
  let h = Math.floor((canvas.clientWidth * pixelRatio)/ aspectRatio)
  const needResize = canvas.width !== w || canvas.height !== h;
  if (needResize) {
    bloomPass.resolution.set(w, h);
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

    for (let i = 0; i < ffts.length; i++) {
      const aPos = lines.children[i].geometry.attributes.position
      let positions = aPos.array;
      for (let j = 0, index = 0; j < ffts[i].length * 3; j++) {
        positions[index++] = 40.0 + 40 * Math.log10(j / ffts[i].length);
        //
        positions[index++] = -10. + sharpness + (ffts[i][j]) * loudness;
        positions[index++] = - i * 1.1;
      }
      aPos.needsUpdate = true;
    }

    // render Spectral Centroid Arrow
    if (features.spectralCentroid) {
      centroidArrow.position.set(
        10.7 + 8 * Math.log10(features.spectralCentroid / (bufferSize / 2)),
        -6,
        -16
      );
    }

    // render spectral rolloff Arrow
    if (features.spectralRolloff) {
      let rolloff = features.spectralRolloff / 22050;
      rolloffArrow.position.set(10.7 + 8 * Math.log10(rolloff), -6, -15);
    }

    // render rms Arrow
    if (features.rms) {
      rmsArrow.position.set(-11, -5 + 10 * features.rms, -15);
    }

    if (!!signal) {
      const aPos = bufferLine.geometry.attributes.position
      let positions = aPos.array;
      for (let i = 0, index = 0; i < bufferSize; i++) {
        positions[index++] = -7 + (10 * i) / bufferSize;
        positions[index++] = 4 + 5 * signal[i];
        positions[index++] = -10
      }
      aPos.needsUpdate = true;
    }
  }
  //
  controls.update()
  //
  composer.render();

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
    tick()
  }
})

const btn = document.querySelector("#cover")
const tl = gsap.timeline()
tl.to('#cover', {
  duration: 2,
  autoAlpha: 1,
  ease: 'power2.out',
  onComplete: () => { }
})

btn.addEventListener('click', e => {
  /*  var aabb = new Box3().setFromObject(lines );
   var center = aabb.getCenter( new Vector3() ); */
  audio.start()
  // tl.set('#canvas', { opacity: 0 })
  tl.to('#cover', {
    duration: 2.0,
    autoAlpha: 0,
    top: "-20px",
    ease: 'power2.out',
    onComplete: () => { }
  });
}, { once: true }) 