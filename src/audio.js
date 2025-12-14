import { invlerp } from "./utils";

// Audio configuration constants
export const FFT_SIZE = 512;
export const NUM_FFT_SNAPSHOTS = 90;

// FFT grid visualization
export const FFT_X_OFFSET = -60;
export const FFT_Y_OFFSET = -25;
export const FFT_Z_BASE = 0;

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
 * Calculates X position using logarithmic frequency distribution
 * Provides more visual space for low frequencies (bass/mids) and compresses high frequencies
 * @param {number} freqBin - Frequency bin index (0 to FFT_SIZE/2 - 1)
 * @param {number} xscale - Scale multiplier for positioning
 * @returns {number} X position with logarithmic frequency scale (bass spread, treble compressed)
 */
export const getFrequencyXPosition = (freqBin, xscale) => {
  const normalizedFreq = freqBin / (FFT_SIZE / 2); // Normalize to 0-1 range
  const logScale = Math.log10(normalizedFreq + 0.01) + 2; // Log scale + offset for positive values
  return FFT_X_OFFSET + xscale * logScale / 2.1; // Scale and normalize output 0..1
};

/**
 * Calculates FFT snapshot index from instance index
 * Maps from linear instance array to 2D FFT matrix [snapshot][frequency]
 * @param {number} index - Instance index (0 to NUM_FFT_SNAPSHOTS * FFT_SIZE/2 - 1)
 * @returns {number} FFT snapshot index (0 to NUM_FFT_SNAPSHOTS - 1)
 */
export const getFFTIndex = (index) => {
  // CORRECT formula:
  return Math.floor(index / (FFT_SIZE / 2));
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
