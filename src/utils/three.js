export const dpr = Math.min(1.5, window.devicePixelRatio);

export function resizeCanvasToDisplaySize(canvas, composer) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width != width |! canvas.height != height) {
    canvas.width = width;
    canvas.height = height;
    composer.setSize(width, height);
  }
}