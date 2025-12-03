import {
  debounceTime,
  fromEvent,
  filter,
  startWith,
  first,
  scan,
} from "rxjs";

export function pauseKey$(keyCode) {
  return fromEvent(document, "keydown").pipe(
    filter((e) => e.keyCode === keyCode),
    startWith(false),
    scan((prev) => !prev)
  );
}

export function clickButton$(btn) {
  return fromEvent(btn, "click").pipe(debounceTime(250), first());
}

/**
 * Wraps renderer.setAnimationLoop with RxJS pause functionality
 * @param {WebGLRenderer} renderer - Three.js renderer
 * @param {Function} renderCallback - Animation loop callback
 * @param {Observable} pause$ - Pause state observable
 * @returns {Function} Cleanup function to stop the animation
 */
export function setAnimationLoopWithPause(renderer, renderCallback, pause$) {
  let isPaused = false;

  const pauseSubscription = pause$.subscribe((paused) => {
    isPaused = paused;
    if (paused) {
      renderer.setAnimationLoop(null); // Stop animation loop
    } else {
      renderer.setAnimationLoop(renderCallback); // Resume animation loop
    }
  });

  // Start animation loop if not paused
  if (!isPaused) {
    renderer.setAnimationLoop(renderCallback);
  }

  // Return cleanup function
  return () => {
    renderer.setAnimationLoop(null);
    pauseSubscription.unsubscribe();
  };
}
