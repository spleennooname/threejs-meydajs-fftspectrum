

import {
  Observable,
  debounceTime,
  fromEvent,
  filter,
  startWith,
  first,
  scan,
  animationFrames,
  withLatestFrom,
  auditTime,
  distinctUntilChanged
} from "rxjs";

export function resizeObserver$(el, settings = { box: "device-pixel-content-box" }) {
  return new Observable(subscriber => {
    let ro = new ResizeObserver(entries => {
      subscriber.next(entries);
    });
    // Observe one or multiple elements
    ro.observe(el);
    return function unsubscribe() {
      ro.unobserve(el);
    }
  })
    .pipe(
      debounceTime(250),
      distinctUntilChanged()
    )
}

export function resize$() {
  return fromEvent(window, "resize")
    .pipe(
      debounceTime(250),
      distinctUntilChanged()
    )
}

export function pauseKey$(keyCode) {
  return fromEvent(document, "keydown")
    .pipe(
      filter(e => e.keyCode === keyCode),
      startWith(false),
      scan(prev => !prev)
    )
}

export function buttonStart$(btn) {
  return fromEvent(btn, "click")
    .pipe(
      debounceTime(250),
      first(),
    )
}

export function render$(pause$, fps) {
  return animationFrames()
    .pipe(
      auditTime(1000 / fps),
      withLatestFrom(pause$),
      filter(arr => !arr[1]),
      //takeUntil(destroy$)
    )
}
