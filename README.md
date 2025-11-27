```
 ╭━━━┳━━━┳━━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
 ┃╭━━┫╭━━┫╭╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮
 ┃╰━━┫╰━━╋╯┃┃╰╯╭━━┳━━┳━━┳━┻╮╭╋━┳╮╭┳╮╭╮
 ┃╭━━┫╭━━╯╱┃┃╱╱┃━━┫╭╮┃┃━┫╭━┫┃┃╭┫┃┃┃╰╯┃
 ┃┃╱╱┃┃╱╱╱╱┃┃╱╱┣━━┃╰╯┃┃━┫╰━┫╰┫┃┃╰╯┃┃┃┃
 ╰╯╱╱╰╯╱╱╱╱╰╯╱╱╰━━┫╭━┻━━┻━━┻━┻╯╰━━┻┻┻╯
  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃ real-time audio features extraction
  ╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯ && FFT spectrum analyzer

```

![version](https://img.shields.io/badge/version-1.1.1-green) ![threejs](https://img.shields.io/badge/three.js-0.181.2-green) ![meyda](https://img.shields.io/badge/meyda-v5.6.3-green) ![rxjs](https://img.shields.io/badge/rxjs-v7.5.5-green) ![build](https://img.shields.io/badge/build-passing-brightgreen) ![code style](https://img.shields.io/badge/code%20style-prettier-ff69b4) ![node](https://img.shields.io/badge/node-22.21.1-green) ![npm](https://img.shields.io/badge/npm-8.19.4-blue) ![audio api](https://img.shields.io/badge/Web%20Audio%20API-required-orange)

[![demo 720p - chrome osx](https://img.youtube.com/vi/Afveg4cTy_g/0.jpg)](https://www.youtube.com/watch?v=Afveg4cTy_g)

[![demo 1080p - chrome windows10](https://img.youtube.com/vi/Lvakr96Llcg/0.jpg)](https://www.youtube.com/watch?v=Lvakr96Llcg)

[demo](https://threejs-meydajs-fftspectrum.surge.sh)

longstoryshort: the microphone detects the audio, _meydajs_ extracts metrics features used to drive  _threejs_ webgl stuff.

- Start project with `npm run dev`
- open another tab with youtube music / bring any sound source closer to the microphone
- ✨Magic✨

About audio features [read here](https://meyda.js.org/audio-features)

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

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).

See [LICENSE.md](./LICENSE.md)