# threejs + meyda

> real-time FFT magnitude spectrum analyzer with ThreeJS and MeydaJS.

longstoryshort: the microphone detects the audio, _meydajs_ extracts metrics features, used to drive the _threejs_ webgl effect.

- Start project with `npm run dev`
- open another tab with youtube music
- ✨Magic✨

What are audio features? [Read here](https://meyda.js.org/audio-features)

## Installation

install with

```sh
npm i
```

dev mode expose at `http://localhost:3000`

```sh
npm run dev
```

build with

```sh
npm run build
```

## Tech stack

- [ThreeJS](https://threejs.org)
- [MeydaJS](https://meyda.js.org/)
  > Meyda is a JavaScript audio feature extraction library. It works with the Web Audio API (or plain old JavaScript arrays) to expose information about the timbre and perceived qualities of sound. Meyda supports both offline feature extraction as well as real-time feature extraction using the Web Audio API.
- [Vite](https://vitejs.dev/)

## License

MIT
