
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
  video: { facingMode: "user" } 
}
// Module-level state
let audioContext = null;
let source = null;
let meyda = null;

export function meydaPromise({constrains = AUDIO_CONSTRAINS, bufferSize = 512}) {
  return navigator
    .mediaDevices
    .getUserMedia(constrains)
    .then(stream => successStream({stream, bufferSize}))
    .catch(err => errorStream(err)
  )
}

function successStream({stream, bufferSize}) {

  audioContext = new AudioContext()

  const audioTrack = stream.getAudioTracks()[0]

  if (audioTrack) {
    console.log(audioTrack.getSettings())
  }

  source = audioContext.createMediaStreamSource(stream)
  meyda = Meyda.createMeydaAnalyzer({
    audioContext: audioContext,
    source: source,
    //sampleRate: streamAudioSettings.sampleRate || 44100,
    // Buffer Size tells Meyda how often to check the audio feature, and is
    // measured in Audio Samples. Usually there are 44100 Audio Samples in 1
    // second, which means in this case Meyda will calculate the level about 43
    // (44100/1024) times per second.
    bufferSize,
    //windowingFunction: "blackman"
  });
  meyda.start()
  return stream
}

function errorStream(stream) {
  console.error("AudioFeaturesExtractor", stream)
}

export function features(audioFeatures = [
  "amplitudeSpectrum",
  "spectralCentroid",
  "spectralRolloff",
  "perceptualSharpness",
  "loudness",
  "rms",
  "chroma",
  "mfcc",
]) {
  if( !meyda || !audioContext ) return null
  return meyda.get(audioFeatures)
}

export function signal() {
  if( !meyda) return null
  return meyda._m.signal;
}