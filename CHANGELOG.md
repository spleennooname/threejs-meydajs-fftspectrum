# Changelog

## [1.1.1] - 2025-11-27

- other refactors
- three to r0.181.2
- node/npm to 22.21.1
- used wonderful [InstancedMesh2](https://github.com/agargaro/instanced-mesh)
- 

## [1.1.0] - 2025-11-15

### Changed
- Major refactor of codebase architecture
- Migrated to ES modules with `"type": "module"` in package.json
- Improved RxJS reactive patterns and error handling
- Enhanced code formatting with Prettier integration
- Updated development workflow with better tooling
- Three.js to v0.180.0 (latest)
- MeyDA to v5.6.3 (latest audio feature extraction)
- RxJS to v7.5.5 (reactive programming)
- Vite to v2.9.9 (build tool)
- Node.js requirement to v21.7.3
- npm requirement to v8.19.4

### Added
- Prettier configuration for consistent code formatting
- Enhanced CLAUDE.md with detailed architecture documentation
- Build status and dependency badges in README
- Comprehensive error handling in audio initialization
- Performance optimizations for real-time rendering

### Fixed
- Audio context initialization reliability
- Memory leaks in render loop
- Browser compatibility issues with Web Audio API
- Responsive canvas sizing and device pixel ratio handling

## [0.1.0] - Initial Release

### Added
- Audio-reactive WebGL visualization
- FFT spectrum analyzer with real-time audio processing
- Three.js 3D rendering with post-processing effects
- MeyDA integration for audio feature extraction
- RxJS reactive architecture
- GSAP animations for UI transitions
- Tweakpane debug controls
- HTTPS development server for microphone access