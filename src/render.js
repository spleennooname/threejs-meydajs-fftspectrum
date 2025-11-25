import { PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


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

export function createCamera() {
  return new PerspectiveCamera(CAMERA_FOV, CAMERA_ASPECT, CAMERA_NEAR, CAMERA_FAR);
}

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
  return controls
}