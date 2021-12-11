
import * as Meyda from "meyda";
import { tap, catchError, Observable } from "rxjs";

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

  constructor({ bufferSize = 512 }) {
    this.bufferSize = bufferSize
    navigator.getUserMedia = navigator.webkitGetUserMedia ||
      navigator.getUserMedia ||
      navigator.mediaDevices.getUserMedia;
  }

  start(AUDIO_COSTRAINS) {
    //
    this.context = new AudioContext()
    //
    return this.getUserMedia()
      .pipe(
        tap( stream => this.successStream(stream)),
        catchError(err => this.errorStream(err))
      )
  }

  successStream(stream ) {
    window.persistAudioStream = stream;
    this.streamSettings = stream.getAudioTracks()[0].getSettings()
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
    console.log('AudioFeaturesExtractor', stream)
    return this.meyda
  }

  errorStream(stream){
    console.error('AudioFeaturesExtractor', stream)
  }

  getUserMedia() {
    return new Observable(subscriber => {
      navigator
        .mediaDevices
        .getUserMedia(AUDIO_CONSTRAINS)
        .then(mediaStream => {
          subscriber.next(mediaStream)
          subscriber.complete()
        })
        .catch(err => {
          subscriber.error(err);
        })
        return () => subscriber.complete()
    })
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
    if(this.context) this.context.resume();
    return this.meyda.get(features)
  }

  signal() {
    return this.meyda._m.signal;
  }
}