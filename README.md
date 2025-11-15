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

![version](https://img.shields.io/badge/version-1.1.0-blue) ![threejs](https://img.shields.io/badge/three.js-0.150.1-green) ![meyda](https://img.shields.io/badge/meyda-v5.6.3-green) ![rxjs](https://img.shields.io/badge/rxjs-v7.5.5-green) ![build](https://img.shields.io/badge/build-passing-brightgreen) ![code style](https://img.shields.io/badge/code%20style-prettier-ff69b4) ![node](https://img.shields.io/badge/node-21.7.3-green) ![npm](https://img.shields.io/badge/npm-8.19.4-blue) ![audio api](https://img.shields.io/badge/Web%20Audio%20API-required-orange)

[![demo 720p - chrome osx](https://img.youtube.com/vi/Afveg4cTy_g/0.jpg)](https://www.youtube.com/watch?v=Afveg4cTy_g)

[![demo 1080p - chrome windows10](https://img.youtube.com/vi/Lvakr96Llcg/0.jpg)](https://www.youtube.com/watch?v=Lvakr96Llcg)

[demo](https://threejs-meydajs-fftspectrum.surge.sh)

longstoryshort: the microphone detects the audio, _meydajs_ extracts metrics features used to drive  _threejs_ webgl stuff.

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

This project is licensed under the MIT License - see the details below.

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.**

### What this means

✅ **You can:**
- Use this code in personal and commercial projects
- Modify and distribute the code
- Use it as part of a larger project
- Sell software that includes this code

❗ **You must:**
- Include the original copyright notice
- Include the MIT license text

🚫 **You cannot:**
- Hold the author liable for damages
- Use the author's name to promote derived products without permission

Copyright (c) 2025 Andrea Bovo
