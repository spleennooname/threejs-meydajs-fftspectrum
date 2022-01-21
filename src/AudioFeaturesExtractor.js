
import * as Meyda from "meyda";

navigator.getUserMedia = navigator.webkitGetUserMedia ||
  navigator.getUserMedia ||
  navigator.mediaDevices.getUserMedia

export const AUDIO_CONSTRAINS = {
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

export const VIDEO_CONSTRAINS = {
  video: { facingMode: 'user' } 
}
export class AudioFeaturesExtractor {

  meydaPromise({constrains = AUDIO_CONSTRAINS, bufferSize = 512}) {
    return navigator
      .mediaDevices
      .getUserMedia(constrains)
      .then(stream => this.successStream({stream, bufferSize}))
      .catch(err => this.errorStream(err)
    )
  }

  successStream({stream, bufferSize}) {

    this.audioContext = new AudioContext()

    const audioTrack = stream.getAudioTracks()[0]

    if (audioTrack) {
      this.streamAudioSettings = audioTrack.getSettings()
    }
 
    this.source = this.audioContext.createMediaStreamSource(stream)
    this.meyda = Meyda.createMeydaAnalyzer({
      audioContext: this.audioContext,
      source: this.source,
      //sampleRate: this.streamAudioSettings.sampleRate || 44100,
      // Buffer Size tells Meyda how often to check the audio feature, and is
      // measured in Audio Samples. Usually there are 44100 Audio Samples in 1
      // second, which means in this case Meyda will calculate the level about 43
      // (44100/1024) times per second.
      bufferSize,
      //windowingFunction: "blackman"
    });
    this.meyda.start()
    return stream
  }

  errorStream(stream) {
    console.error("AudioFeaturesExtractor", stream)
  }

  features(audioFeatures = [
    "amplitudeSpectrum",
    "spectralCentroid",
    "spectralRolloff",
    "perceptualSharpness",
    "loudness",
    "rms",
    "chroma",
    "mfcc",
  ]) {
    if( !this.meyda || !this.audioContext ) return null
    return this.meyda.get(audioFeatures)
  }

  signal() {
    if( !this.meyda) return null
    return this.meyda._m.signal;
  }
}