
import * as Meyda from "meyda";

const AUDIO_CONSTRAINS = {
  audio: {
    channelCount: {
      ideal: 2,
      min: 1
    },
    echoCancellation: true,
    autoGainControl: true,
    noiseSuppression: true
  }
}

export default class AudioFeaturesExtractor {

  constructor({ onComplete, bufferSize = 512 }) {
    this.bufferSize = bufferSize
    this.onReady = onComplete
  }

  start(AUDIO_COSTRAINS) {

    //
    this.context = new AudioContext()
    //
    navigator.getUserMedia = navigator.webkitGetUserMedia ||
      navigator.getUserMedia ||
      navigator.mediaDevices.getUserMedia;
    //
    const errorCb = err => {
      console.error("error", err)
      if (this.context.state === "suspended") {
        const resume = () => {
          this.context.resume();
          setTimeout(() => {
            if (this.context.state === "running") {
              document.body.removeEventListener("touchend", resume, false)
            }
          }, 0);
        };
        document.body.addEventListener("touchend", resume, false)
      }
    }
    //
    const successCallback = stream => {

      window.persistAudioStream = stream;

      this.streamSettings = stream.getAudioTracks()[0].getSettings()

      console.log(this.streamSettings)

      this.source = this.context.createMediaStreamSource(stream)
      //
      this.meyda = Meyda.createMeydaAnalyzer({
        audioContext: this.context,
        source: this.source,
        sampleRate: this.streamSettings.sampleRate || 44100,
        // Buffer Size tells Meyda how often to check the audio feature, and is
        // measured in Audio Samples. Usually there are 44100 Audio Samples in 1
        // second, which means in this case Meyda will calculate the level about 43
        // (44100/1024) times per second.
        bufferSize: this.bufferSize,
        windowingFunction: "blackman"
      });
      this.meyda.start()
      !!this.onReady && this.onReady(this)
    }
    //
    try {
      navigator
        .mediaDevices
        .getUserMedia(AUDIO_CONSTRAINS)
        .then(successCallback)
        .catch(err => {
          navigator.getUserMedia({ audio: true },
            successCallback,
            errorCb
          );
        })
    } catch (e) {
      errorCb(e)
    }
  }

  features(features = [
    "amplitudeSpectrum",
    "spectralCentroid",
    "spectralRolloff",
    "perceptualSharpness",
    "loudness",
    "rms",
    "chroma",
    "mfcc",
  ]) {
    this.context.resume();
    return this.meyda.get(features)
  }

  signal() {
    return this.meyda._m.signal;
  }

  onReady(fn) {
    cb(this)
  }
}