# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an audio-reactive WebGL experiment that creates real-time visualizations driven by audio features extracted from microphone input. The application uses ThreeJS for 3D graphics, MeydaJS for audio feature extraction, and RxJS for reactive programming patterns.

## Development Commands

### Core Development
- `npm run dev` - Start development server with live reload and linting (runs on https://localhost:3000)
- `npm run vite` - Start Vite dev server only
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality
- `npm run lint` - Lint src/index.js
- `npm run lint:fix` - Auto-fix linting issues
- `npm run lint:watch` - Watch mode for linting with auto-fix

### Other
- `npm run ngrok` - Expose local server via ngrok for testing on mobile devices

## Architecture

### Core Structure
The application follows a reactive architecture pattern:

1. **Entry Point** (`src/index.js`): Creates and runs the main App instance
2. **Main App** (`src/App.js`): Orchestrates the entire application using RxJS observables
3. **Audio Processing** (`src/AudioFeaturesExtractor.js`): Wraps MeydaJS for real-time audio analysis
4. **Utilities** (`src/utils.js`): Helper functions for FFT processing and color palettes

### Key Components

#### Audio Pipeline
- Uses Web Audio API to capture microphone input
- MeydaJS extracts features: `amplitudeSpectrum`, `perceptualSharpness`, `perceptualSpread`, `spectralFlatness`, `loudness`
- Features drive both visual parameters and 3D transformations

#### 3D Visualization
- **FFT Spectrum**: Group of line meshes representing frequency bins over time using custom shaders (`src/shaders/materials/line.js`)
- **Signal Visualization**: InstancedMesh showing time-domain signal as colored cubes
- **Post-processing**: UnrealBloomPass for glow effects

#### Reactive Flow
- Uses RxJS to coordinate initialization, user interaction, and render loop
- Button click triggers audio permission and initialization
- Render loop runs with pause functionality (spacebar)

### Key Libraries Integration
- **ThreeJS**: 3D rendering, cameras, lights, geometries, materials, post-processing
- **MeydaJS**: Audio feature extraction from live audio stream
- **RxJS**: Reactive programming for application flow
- **GSAP**: UI animations and transitions
- **Tweakpane**: Debug UI for real-time parameter control

### File Organization
- `src/lib/`: Utility modules for RxJS patterns and ThreeJS helpers
- `src/shaders/materials/`: Custom GLSL shaders for visual effects
- `src/utils.js`: FFT processing and color palette utilities

## Development Notes

### Audio Requirements
- Requires microphone access for audio input
- Uses HTTPS in development for Web Audio API permissions
- Audio context and MeydaJS analyzer are initialized after user interaction

### Performance Considerations
- Uses InstancedMesh for efficient rendering of signal visualization
- Custom shaders for FFT spectrum lines
- Dynamic buffer updates for real-time audio visualization
- Configurable FFT size (default: 512) and visualization parameters

### Browser Compatibility
- Requires modern browser with Web Audio API support
- Uses ES6 modules and modern JavaScript features