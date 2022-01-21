

import {
  Observable,
  debounceTime,
  from,
  fromEvent,
  filter,
  startWith,
  first,
  scan,
  animationFrames,
  withLatestFrom,
  auditTime,
  map,
  distinctUntilChanged
} from "rxjs";

export function resize$(el, settings = { box: "device-pixel-content-box" }) {
  return new Observable(subscriber => {
    let ro = new ResizeObserver(entries => {
      subscriber.next(entries);
    });
    // Observe one or multiple elements
    ro.observe(el, settings);
    return function unsubscribe() {
      ro.unobserve(el);
    }
  })
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
