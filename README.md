```
 ╭━━━┳━━━┳━━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
 ┃╭━━┫╭━━┫╭╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
 ┃╰━━┫╰━━╋╯┃┃╰╯╭━━┳━━┳━━┳━┻╮╭╋━┳╮╭┳╮╭╮
 ┃╭━━┫╭━━╯╱┃┃╱╱┃━━┫╭╮┃┃━┫╭━┫┃┃╭┫┃┃┃╰╯┃
 ┃┃╱╱┃┃╱╱╱╱┃┃╱╱┣━━┃╰╯┃┃━┫╰━┫╰┫┃┃╰╯┃┃┃┃
 ╰╯╱╱╰╯╱╱╱╱╰╯╱╱╰━━┫╭━┻━━┻━━┻━┻╯╰━━┻┻┻╯
  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃ 
  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯ Real-time FFT magnitude spectrum analyzer

```

![threejs r133](https://img.shields.io/badge/three-v133-green) ![meyda v5.2.2](https://img.shields.io/badge/meyda-v5.2.2-green) ![rxjs 7.0](https://img.shields.io/badge/rxjs-v7.0-green)

[![demo 720p - chrome osx](https://img.youtube.com/vi/Afveg4cTy_g/0.jpg)](https://www.youtube.com/watch?v=Afveg4cTy_g)

[![demo 1080p - chrome windows10](https://img.youtube.com/vi/Lvakr96Llcg/0.jpg)](https://www.youtube.com/watch?v=Lvakr96Llcg)

[demo](https://threejs-meydajs-fftspectrum.surge.sh)

longstoryshort: the microphone detects the audio, _meydajs_ extracts metrics features, used to affect the _threejs_ webgl fx

- Start project with `npm run dev`
- open another tab with youtube music / bring any sound source closer to the microphone
- ✨Magic✨

What are audio features? [Read here](https://meyda.js.org/audio-features)

## setup

```sh
npm i
```

## dev

(expose `http://localhost:3000` )

```sh
npm run dev
```

## build

```sh
npm run build
```

## Tech stack

- [ThreeJS](https://threejs.org)
- [RXJS](https://rxjs.dev/)
- [MeydaJS](https://meyda.js.org/)
  > Meyda is a JavaScript audio feature extraction library. It works with the Web Audio API (or plain old JavaScript arrays) to expose information about the timbre and perceived qualities of sound. Meyda supports both offline feature extraction as well as real-time feature extraction using the Web Audio API.
- [Vite](https://vitejs.dev/)

## todo

- [x] use InstancedMesh for FFT Spectrum
- [x] refactor with rxjs

## License

MIT
