
import Stats from "stats.js"

import {
  tap,
  concat,
  from,
  delay,
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

import { getFFTs, getPalette, invlerp } from "../utils"

import { fs, vs } from "../shaders/materials/line"

import { AudioFeaturesExtractor } from "../AudioFeaturesExtractor"

import { pauseKey$, buttonStart$, renderWithPause$ } from "../lib/rx";
import { dpr, needsResize } from "../lib/three";


const params = {
  amount: 10,
  xscale: 50
}

const audio = {
  loudness: 0,
  perceptualSharpness: 0,
  perceptualSpread: 0,
  spectralFlatness: 0
};

import { Controls } from "./Controls";
import { Cover } from "./Cover"

import React from 'react';
import { useEffect, useState } from "react"
//import { useObservableState, useSubscription } from "observable-hooks";

export default function App() {

  const fftSize = 512;
  const numLines = 50;
  const audioFeaturesExtractor = new AudioFeaturesExtractor();

  const stats = new Stats();
  document.querySelector("#stats").appendChild(stats.dom)

  let ffts, signalPalette
  let renderer, camera, composer, bloomPass, controls
  let iSignalMesh, fftMeshes, iDummy, iColor

  const init = () => {

    // for instancedmesh computation
    iDummy = new Object3D();
    iColor = new Color();

    const scene = new Scene();

    camera = new PerspectiveCamera(75, 4 / 3, 5, 1e4);
    camera.position.set(0, -5, 10);
    camera.lookAt(0, 0, 0);

    const canvas = document.querySelector("#canvas")

    renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(dpr);

    controls = new OrbitControls(camera, canvas);
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

    const directionalLight = new DirectionalLight(0xffffff, 0.75);
    directionalLight.position.set(0, 1, 1);

    scene.add(directionalLight);

    const renderPass = new RenderPass(scene, camera);

    let w = canvas.clientWidth * dpr
    let h = canvas.clientHeight * dpr
    let resolution = new Vector2(w, h)

    //fbo = new DoubleBuffer({ width: w, height: h});

    bloomPass = new UnrealBloomPass(resolution, 0, 0, 0);
    bloomPass.threshold = 0.0
    bloomPass.strength = 1.75;
    bloomPass.radius = 1.5;

    composer = new EffectComposer(renderer);
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

    ffts = getFFTs(numLines, fftSize);

    const fftMat = new MeshLambertMaterial({ color: 0xffffff })

    // 1. INSTANCED MESH for signal
    const baseGeom = new BoxBufferGeometry(0.25)

    iSignalMesh = new InstancedMesh(baseGeom, fftMat, fftSize);
    iSignalMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    iSignalMesh.position.set(-8, 0, 0)
    iSignalMesh.scale.set(1, 1, 1)

    // get meshes color
    // check https://github.com/bpostlethwaite/colormap
    const paletteLabel = "picnic"

    let colors = getPalette(paletteLabel, ffts.length)

    signalPalette = getPalette(paletteLabel, fftSize)
      .map(a => new Color().fromArray(a))

    signalPalette
      .forEach((c, i) => iSignalMesh.setColorAt(i, c));

    scene.add(iSignalMesh);

    // 2. group of meshes for fft spectrum
    fftMeshes = new Group();
    for (let i = 0; i < ffts.length; i++) {
      if (ffts[i]) {
        //
        const fftGeom = new BufferGeometry();
        // eslint-disable-next-line no-undef
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

    scene.add(fftMeshes)

    console.log("init")
  }

  const update = ([{ timestamp }]) => {

    // https://threejs.org/manual/#en/responsive
    if (needsResize({ renderer, composer })) {
      const { clientWidth, clientHeight} = renderer.domElement;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      console.log("resize")
    }

    if (!audioFeaturesExtractor) return

    const features = audioFeaturesExtractor.features([
      "perceptualSharpness",
      "perceptualSpread",
      "spectralFlatness",
      "amplitudeSpectrum", // fft
      "loudness"
    ]);

    if (!features) return

    // fill ffts spectrum buffers
    ffts.pop();
    ffts.unshift(features.amplitudeSpectrum);

    const loudness = invlerp(3, 50, features.loudness.total)

    const { perceptualSpread, perceptualSharpness } = features

    audio.loudness = loudness;
    audio.perceptualSharpness = features.perceptualSharpness
    audio.perceptualSpread = features.perceptualSpread
    audio.spectralFlatness = features.spectralFlatness

    // affect blooming with perceptualSharpnes / loudness 
    //bloomPass.strength = lerp(1, 1.25, loudness)
    //bloomPass.radius = lerp(1, 3, perceptualSharpness)

    // render ffts
    for (let i = 0; i < ffts.length; i++) {

      const geom = fftMeshes.children[i].geometry
      const position = geom.getAttribute("position")

      for (let j = 0; j < position.count * 3; j++) {
        const index = j * 3;
        // x -> frequency bins
        // https://www.desmos.com/calculator/ss4rcedsl4
        position.array[index + 0] = params.xscale + params.xscale * Math.log10(j / ffts[i].length);
        // y -> magnitude 
        position.array[index + 1] = -15 + perceptualSharpness + ffts[i][j] * (params.amount * loudness);
        position.array[index + 2] = +15 - i * (5 * perceptualSpread)
      }

      position.needsUpdate = true;
    }

    // domain-time  via instancedgeometry
    const signal = audioFeaturesExtractor.signal();
    if (!!signal && iSignalMesh) {
      for (let i = 0; i < fftSize; i++) {
        iDummy.position.set(
          (15 * i) / fftSize,
          signal[i] * 30,
          0
        );
        iDummy.rotation.set(
          (timestamp + audio.loudness) * 1e-3,
          0,
          loudness
        )
        iDummy.scale.set(
          loudness * 0.2,
          perceptualSharpness * 0.2,
          perceptualSharpness * 0.2
        )
        iDummy.updateMatrix();
        iColor.set(signalPalette[i])
        iSignalMesh.setColorAt(i, iColor)
        iSignalMesh.setMatrixAt(i, iDummy.matrix);
      }
      iSignalMesh.instanceMatrix.needsUpdate = true
      iSignalMesh.instanceColor.needsUpdate = true
    }

    controls.update()

    composer.render();

    stats.update()
  }

  const run$ = () => concat(
  
    combineLatest([
      buttonStart$(document.querySelector("#cover")),
      from(audioFeaturesExtractor.meydaPromise({ fftSize })).pipe( delay(300))
    ])
      .pipe(
        tap(init)
      ),
    // render
    renderWithPause$(pauseKey$(32))
      .pipe(
        tap(update)
      )
  )

  const start = ( domCover ) =>{
    console.log('App: start', domCover)
  }

  useEffect(
    () => {

     const sub = run$().subscribe()

      return function cleanup() {
        console.log("cancella")
        return sub.unsubscribe
      }
    },
    [] // eseguito once
  )

  return (
    <div className="wrapper container">
      <canvas id="canvas"></canvas>
      <Cover click={start}/>
      <Controls audio={audio} params={params}/>
    </div>
  );
}
