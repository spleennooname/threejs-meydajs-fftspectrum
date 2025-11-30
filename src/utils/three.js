export const dpr = Math.min(1.2, window.devicePixelRatio);

export function needsResize({ renderer, composer }) {
  const canvas = renderer.domElement;
  const w = (canvas.clientWidth * dpr) | 0;
  const h = (canvas.clientHeight * dpr) | 0;
  const needResize = canvas.width !== w || canvas.height !== h;
  if (needResize) {
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
  }
  return needResize;
}
