import { invlerp } from "./utils";

// Audio configuration constants
export const FFT_SIZE = 1024;
export const NUM_FFT_SNAPSHOTS = 70;

// FFT grid visualization
export const FFT_Y_OFFSET = -10;
export const FFT_Z_BASE = -5;
// fft bar spacing
export const FFT_Z_STEP_MULTIPLIER = 6;

// return ffts matrix filled
export const getFFTs = (number, pointCount) => {
  const ffts = [];
  for (let i = 0; i < number; i++) {
    ffts.push(Array(pointCount).fill(0));
  }
  return ffts;
};

// Process audio features for visualization
export const processAudioFeatures = (features) => {
  const {
    perceptualSpread,
    perceptualSharpness,
    spectralKurtosis,
    spectralFlatness,
    loudness,
  } = features;

  return {
    loudness: invlerp(0, 50, loudness.total),
    spectralKurtosis: invlerp(5, 40, spectralKurtosis),
    perceptualSharpness,
    perceptualSpread,
    spectralFlatness,
  };
};
