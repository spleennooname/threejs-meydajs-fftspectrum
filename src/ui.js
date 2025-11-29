import { Pane } from "tweakpane";

export function createGUI(params, audio) {
  const gui = new Pane({
    title: "controls",
    expanded: true,
  });

  gui.addInput(params, "amount", { min: 1, max: 6 });
  gui.addInput(params, "xscale", { min: 30, max: 500 });

  const audioFolder = gui.addFolder({
    title: "audio",
    expanded: true,
  });

  audioFolder.addMonitor(audio, "loudness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addMonitor(audio, "perceptualSpread", {
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addMonitor(audio, "perceptualSharpness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addMonitor(audio, "spectralFlatness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  audioFolder.addMonitor(audio, "spectralKurtosis", {
    view: "graph",
    min: 0,
    max: 1,
  });

  return gui;
}
