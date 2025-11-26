import { PerspectiveCamera, DoubleSide, RawShaderMaterial } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { fs, vs } from "./shaders/materials/line";

const CAMERA_FOV = 75;
const CAMERA_ASPECT = 4 / 3;
const CAMERA_NEAR = 5;
const CAMERA_FAR = 1e4;

// Controls configuration constants
const CONTROLS_MAX_DISTANCE = 25;
const CONTROLS_MIN_DISTANCE = 7;
const CONTROLS_DAMPING_FACTOR = 5e-2;
const CONTROLS_MIN_POLAR_ANGLE = 1;
const CONTROLS_MAX_POLAR_ANGLE = Math.PI / 2;

/**
 * Creates a Three.js perspective camera with predefined settings
 * 
 * @returns {PerspectiveCamera} Configured perspective camera for 3D visualization
 */
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
export function createOrbitControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.maxDistance = CONTROLS_MAX_DISTANCE;
  controls.minDistance = CONTROLS_MIN_DISTANCE;
  controls.dampingFactor = CONTROLS_DAMPING_FACTOR;
  controls.minAzimuthAngle = -Math.PI;
  controls.maxAzimuthAngle = Math.PI;
  controls.minPolarAngle = CONTROLS_MIN_POLAR_ANGLE;
  controls.maxPolarAngle = CONTROLS_MAX_POLAR_ANGLE;
  return controls;
}

/**
 * Creates a shader material for FFT spectrum visualization
 * 
 * @param {Array} color - RGB color array for the material
 * @returns {RawShaderMaterial} Configured shader material with custom vertex/fragment shaders
 */
export function createFFTMaterial(color) {
  return new RawShaderMaterial({
    uniforms: {
      uColor: {
        value: color,
      },
    },
    vertexShader: vs,
    fragmentShader: fs,
    transparent: true,
    side: DoubleSide,
  });
}
