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
 * Calculates X position with adjustable frequency distribution
 * @param {number} freqBin - Frequency bin index (0 to FFT_SIZE/2 - 1)
 * @param {number} xscale - Scale multiplier for positioning
 * @param {number} xpower - Exponent controlling distribution curve:
 *   < 1 (e.g. 0.5): expands bass, compresses treble (perceptual/log-like)
 *   = 1: linear
 *   > 1: compresses bass, expands treble
 * @param {number} xstep - Additional per-bin offset for explicit separation between instances
 * @returns {number} X position
 */
export const getFrequencyXPosition = (freqBin, xscale, xpower = 1.0, xstep = 0) => {
  const normalizedFreq = freqBin / (FFT_SIZE / 2);
  return FFT_X_OFFSET + xscale * Math.pow(normalizedFreq, xpower) + freqBin * xstep;
};

/**
 * Calculates FFT snapshot index from instance index
 * Maps from linear instance array to 2D FFT matrix [snapshot][frequency]
 * @param {number} index - Instance index (0 to NUM_FFT_SNAPSHOTS * FFT_SIZE/2 - 1)
 * @returns {number} FFT snapshot index (0 to NUM_FFT_SNAPSHOTS - 1)
 */
export const getFFTIndex = (index) => Math.floor(index / (FFT_SIZE / 2));

const safe = (v, fallback = 0) => (Number.isFinite(v) ? v : fallback);

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
    loudness: safe(invlerp(0, 50, loudness.total)),
    spectralKurtosis: safe(invlerp(5, 40, spectralKurtosis)),
    perceptualSharpness: safe(perceptualSharpness),
    perceptualSpread: safe(perceptualSpread),
    spectralFlatness: safe(spectralFlatness),
  };
};
