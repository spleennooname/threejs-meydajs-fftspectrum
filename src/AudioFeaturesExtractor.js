import * as Meyda from "meyda";

// Modern browsers only - removed deprecated getUserMedia polyfill

export const AUDIO_CONSTRAINS = {
  audio: {
    channelCount: {
      ideal: 2,
      min: 1,
    },
    echoCancellation: true,
    autoGainControl: true,
    noiseSuppression: true,
  },
};

export const VIDEO_CONSTRAINS = {
  video: { facingMode: "user" },
};
/**
 * Audio Features Extractor class using MeydaJS
 * 
 * Handles:
 * - Web Audio API microphone access
 * - Real-time audio feature extraction using Meyda
 * - Audio stream management and error handling
 */
export class AudioFeaturesExtractor {
  /**
   * Initializes audio stream and Meyda analyzer
   * 
   * @param {Object} options - Configuration options
   * @param {Object} options.constrains - MediaStream constraints
   * @param {number} options.bufferSize - Meyda buffer size for feature extraction
   * @returns {Promise<MediaStream>} Promise resolving to audio stream
   */
  meydaPromise({ constrains = AUDIO_CONSTRAINS, bufferSize = 512 }) {
    // Check for modern MediaDevices API support
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      return Promise.reject(
        new Error(
          'getUserMedia is not supported in this browser. Please use a modern browser with Web Audio API support.'
        )
      );
    }

    return navigator.mediaDevices
      .getUserMedia(constrains)
      .then((stream) => this.successStream({ stream, bufferSize }))
      .catch((err) => this.errorStream(err));
  }

  /**
   * Handles successful audio stream acquisition
   * 
   * @param {Object} params - Stream parameters
   * @param {MediaStream} params.stream - Audio stream from getUserMedia
   * @param {number} params.bufferSize - Buffer size for Meyda analyzer
   * @returns {MediaStream} The processed audio stream
   */
  successStream({ stream, bufferSize }) {
    this.audioContext = new AudioContext();

    const audioTrack = stream.getAudioTracks()[0];

    if (audioTrack) {
      this.streamAudioSettings = audioTrack.getSettings();
    }

    this.source = this.audioContext.createMediaStreamSource(stream);
    this.meyda = Meyda.createMeydaAnalyzer({
      audioContext: this.audioContext,
      source: this.source,
      // Buffer Size tells Meyda how often to check the audio feature, and is
      // measured in Audio Samples. Usually there are 44100 Audio Samples in 1
      // second, which means in this case Meyda will calculate the level about 43
      // (44100/1024) times per second.
      bufferSize,
    });
    this.meyda.start();
    return stream;
  }

  /**
   * Handles audio stream errors with detailed logging
   * 
   * @param {Error} error - Error object from getUserMedia or audio processing
   */
  errorStream(error) {
    if (error.name === 'NotAllowedError') {
      console.error("AudioFeaturesExtractor: Microphone access denied by user");
    } else if (error.name === 'NotFoundError') {
      console.error("AudioFeaturesExtractor: No microphone device found");
    } else if (error.name === 'NotSupportedError') {
      console.error("AudioFeaturesExtractor: getUserMedia not supported in this browser");
    } else {
      console.error("AudioFeaturesExtractor:", error.message || error);
    }
  }

  /**
   * Extracts audio features using Meyda analyzer
   * 
   * @param {string[]} audioFeatures - Array of feature names to extract
   * @returns {Object|null} Object containing extracted features or null if not ready
   */
  features(
    audioFeatures = [
      "amplitudeSpectrum",
      "spectralCentroid",
      "spectralRolloff",
      "perceptualSharpness",
      "loudness",
      "rms",
      "chroma",
      "mfcc",
    ]
  ) {
    if (!this.meyda || !this.audioContext) return null;
    return this.meyda.get(audioFeatures);
  }

  /**
   * Gets the current time-domain signal data
   * 
   * @returns {Float32Array|null} Time-domain signal array or null if not available
   */
  signal() {
    if (!this.meyda) return null;
    return this.meyda._m.signal;
  }
}
