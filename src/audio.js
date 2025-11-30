import { invlerp } from "./utils";

// Audio configuration constants
export const FFT_SIZE = 1024;
export const NUM_FFT_SNAPSHOTS = 60;

// FFT grid visualization
export const FFT_Y_OFFSET = -10;
export const FFT_Z_BASE = -5;

export const FFT_AUDIO_FEATURES = [
  "perceptualSharpness",
  "perceptualSpread",
  "spectralFlatness",
  "spectralKurtosis",
  "amplitudeSpectrum", // fft
  "loudness",
];

// fft bar spacing
export const FFT_Z_STEP_MULTIPLIER = 10;

// return ffts matrix filled
export const getFFTs = (number, pointCount) => {
  const ffts = [];
  for (let i = 0; i < number; i++) {
    ffts.push(Array(pointCount).fill(0));
  }
  return ffts;
};

/**
 * Calculates X position with adjustable logarithmic scaling
 * @param {number} freqBin - Frequency bin index (0 to FFT_SIZE/2 - 1)
 * @param {number} xScale - Scale multiplier for positioning
 * @param {number} logStrength - Controls log curve intensity (0=linear, 1=full log)
 * @param {number} offset - Minimum spacing offset
 * @returns {number} X position with adjustable logarithmic frequency scale
 */
export const getFrequencyXPosition = (
  freqBin,
  xscale,
  logStrength = 0.4,
  offset = 0.5
) => {
  /*   const linear = freqBin / (FFT_SIZE / 2);
  const logarithmic = (Math.log10((freqBin + 1) / (FFT_SIZE / 2)) + 2.7) / 2.7;
  const mixed = linear * (1 - logStrength) + logarithmic * logStrength */
  //return  xScale * (offset + mixed * (1 - offset));
  return xscale * (1 + Math.log10((freqBin + 1) / FFT_SIZE / 2));
};

/**
 * Calculates FFT snapshot index from instance index
 * Maps from linear instance array to 2D FFT matrix [snapshot][frequency]
 * @param {number} index - Instance index (0 to NUM_FFT_SNAPSHOTS * FFT_SIZE/2 - 1)
 * @returns {number} FFT snapshot index (0 to NUM_FFT_SNAPSHOTS - 1)
 */
export const getFFTIndex = (index) => {
  // CORRECT formula (fixed from original bug):
  // return Math.floor(index / (FFT_SIZE / 2));

  // INCORRECT formula (kept for documentation of the bug):
  // This was the original buggy version that only accessed first ~35 snapshots
  return Math.floor(index / FFT_SIZE / 2);
};

// process audio features for visualization
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
