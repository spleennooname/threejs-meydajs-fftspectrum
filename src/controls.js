import { Pane } from "tweakpane";

export function createGUI(params, audio) {
  const gui = new Pane({
    title: `fftspectrum · ${__BUILD_VERSION__}`,
    expanded: true,
  });

  gui.addBinding(params, "amount", { min: 1, max: 6 });
  gui.addBinding(params, "xscale", { min: 30, max: 500 });
  gui.addBinding(params, "xpower", { min: 0.1, max: 3.0, step: 0.05 });
  gui.addBinding(params, "xstep", { min: 0, max: 100.0, step: 1 });

  const audioFolder = gui.addFolder({
    title: "audio",
    expanded: true,
  });

  audioFolder.addBinding(audio, "loudness", {
    readonly: true,
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addBinding(audio, "perceptualSpread", {
    readonly: true,
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addBinding(audio, "perceptualSharpness", {
    readonly: true,
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addBinding(audio, "spectralFlatness", {
    readonly: true,
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addBinding(audio, "spectralKurtosis", {
    readonly: true,
    view: "graph",
    min: 0,
    max: 1,
  });

  return gui;
}
