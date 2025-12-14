export const dpr = Math.min(1.2, window.devicePixelRatio);

export function needsResize({ renderer, composer }) {
  const { clientWidth, clientHeight, width, height } = renderer.domElement;
  const w = clientWidth;
  const h = clientHeight;
  const needResize = width !== w || height !== h;
  if (needResize) {
    composer.setSize(w, h);
    console.log("resize");
  }
  return needResize;
}

export function resizeCanvasToDisplaySize(canvas, composer) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width != width |! canvas.height != height) {
    canvas.width = width;
    canvas.height = height;

    composer.setSize(width, height);
  }
}