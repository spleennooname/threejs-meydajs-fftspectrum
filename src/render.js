import {
  PerspectiveCamera,
  DirectionalLight,
  OrthographicCamera,
  HemisphereLight,
} from "three";

import * as THREE from "three";

import CameraControls from "camera-controls";
CameraControls.install({ THREE: THREE });

import { BloomEffect, ScanlineEffect, BlendFunction } from "postprocessing";

const CAMERA_FOV = 50;
const CAMERA_ASPECT = 4 / 3;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1e4;

// Light configuration constants
const LIGHT_POSITION_Y = 1;
const LIGHT_POSITION_Z = 1;

export function createCamera() {
  return new PerspectiveCamera(
    CAMERA_FOV,
    CAMERA_ASPECT,
    CAMERA_NEAR,
    CAMERA_FAR
  );
}

/**
 * Creates and configures Three.js orbit controls for camera interaction
 *
 * @param {PerspectiveCamera} camera - The camera to control
 * @param {HTMLCanvasElement} canvas - The canvas element for mouse events
 * @returns {OrbitControls} Configured orbit controls with damping and movement constraints
 */
export function createControls(camera, canvas) {
  /* const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.maxDistance = CONTROLS_MAX_DISTANCE;
  controls.minDistance = CONTROLS_MIN_DISTANCE;
  controls.dampingFactor = CONTROLS_DAMPING_FACTOR;
  controls.minAzimuthAngle = -Math.PI;
  controls.maxAzimuthAngle = Math.PI;
  controls.minPolarAngle = CONTROLS_MIN_POLAR_ANGLE;
  controls.maxPolarAngle = CONTROLS_MAX_POLAR_ANGLE; */

  const controls = new CameraControls(camera, canvas);

  return controls;
}

/**
 * Creates an orthographic camera for signal visualization
 *
 * @param {number} left - Left boundary
 * @param {number} right - Right boundary
 * @param {number} top - Top boundary
 * @param {number} bottom - Bottom boundary
 * @param {number} near - Near clipping plane
 * @param {number} far - Far clipping plane
 * @returns {OrthographicCamera} Configured orthographic camera
 */
export function createOrthographicCamera(
  left = -10,
  right = 10,
  top = 10,
  bottom = -10,
  near = 0.1,
  far = 1000
) {
  return new OrthographicCamera(left, right, top, bottom, near, far);
}

export function createLights() {
  // some lights
  const hemiLight = new HemisphereLight(0xffffff, 0x222222, 1.5);
  const directionalLight = new DirectionalLight(0xffffff, 2.0);
  directionalLight.position.set(0, LIGHT_POSITION_Y, LIGHT_POSITION_Z);

  return [hemiLight, directionalLight];
}

export function createPostEffects() {
  const bloomEffect = new BloomEffect({
    luminanceThreshold: 0.0,
    intensity: 1.4,
    radius: 1.0,
    mipmapBlur: true,
    blendFunction: BlendFunction.SCREEN,
  });

  const scanlineEffect = new ScanlineEffect({
    //blendFunction: BlendFunction.DST,
    density: 1.5,
  });

  /*   ssaoEffect = new SSAOEffect(camera, undefined, {
      intensity: 10.0,
      radius: 0.1,
      bias: 0.01,
    }); */
  return [bloomEffect, scanlineEffect];
}
