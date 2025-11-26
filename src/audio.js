import { invlerp } from "./utils";

// Audio configuration constants
export const FFT_SIZE = 512;
export const NUM_FFT_LINES = 50;

// FFT visualization constants
export const FFT_Y_OFFSET = -15;
export const FFT_Z_BASE = 15;
export const FFT_Z_STEP_MULTIPLIER = 5;

// Audio processing constants
export const LOUDNESS_MIN = 3;
export const LOUDNESS_MAX = 50;

// FFT utility functions
export const getFFTs = (number, pointCount) => {
  let ffts = [];
  for (let i = 0; i < number; i++) {
    ffts.push(Array(pointCount).fill(0));
  }
  return ffts;
};

// Process audio features for visualization
export const processAudioFeatures = (features) => {
  const { perceptualSpread, perceptualSharpness, spectralFlatness, loudness } =
    features;

  return {
    loudness: invlerp(LOUDNESS_MIN, LOUDNESS_MAX, loudness.total),
    perceptualSharpness,
    perceptualSpread,
    spectralFlatness,
  };
};
