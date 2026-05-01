import { Pane } from "tweakpane";

function populateMicSelector(folder, params, onChange) {
  if (!navigator.mediaDevices?.enumerateDevices) return;
  navigator.mediaDevices.enumerateDevices().then((devices) => {
    const mics = devices.filter((d) => d.kind === "audioinput");
    const options = mics.map((d, i) => ({ text: d.label || `Microphone ${i + 1}`, value: d.deviceId }));
    if (!options.length) options.push({ text: "No device found", value: "" });
    params.micDeviceId = options[0].value;
    folder.addBinding(params, "micDeviceId", { label: "microphone", options })
      .on("change", ({ value }) => onChange(value));
  }).catch(() => {
    folder.addBinding(params, "micDeviceId", { label: "microphone", options: [{ text: "No device found", value: "" }] })
      .on("change", ({ value }) => onChange(value));
  });
}

export function createGUI(params, audio, onMicChange) {
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

  populateMicSelector(audioFolder, params, onMicChange);

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
