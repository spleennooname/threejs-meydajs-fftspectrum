import { Pane } from "tweakpane";

import PropTypes from "prop-types";
import React from "react";

export const Controls = ({params, audio}) => {

  const gui = new Pane({
    title: "controls",
    expanded: true,
  });
  
  gui.addInput(params, "amount", { min: 1, max: 50 })
  gui.addInput(params, "xscale", { min: 20, max: 100 })
  
  gui.addMonitor(audio, "loudness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  // 0 = not rich, 1 = very rich
  gui.addMonitor(audio, "perceptualSpread", {
    view: "graph",
    min: 0,
    max: 1,
  });
  // 0 = not sharp, 1 very sharp
  gui.addMonitor(audio, "perceptualSharpness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  // 1= flat 0 = noisy
  gui.addMonitor(audio, "spectralFlatness", {
    view: "graph",
    min: 0,
    max: 1,
  });
  // 1 = noisy, 0 = flat
  /* gui.addMonitor(audio, "spectralKurtosis", {
    view: "graph",
    min: 0,
    max: 1,
  });
   */

  return (
    <></>
  )
}

Controls.propTypes ={ params: PropTypes.object, audio: PropTypes.object }