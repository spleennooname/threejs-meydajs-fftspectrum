

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

export function resizeObservable(el, settings) {
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

export function pauseKeyObservable(keyCode) {
  return fromEvent(document, "keydown")
    .pipe(
      filter(e => e.keyCode === keyCode),
      startWith(false),
      scan(prev => !prev)
    )
}

export function buttonStartObservable(btn) {
  return fromEvent(btn, "click")
    .pipe(
      debounceTime(250),
      first(),
    )
}

export function renderObservable(pauseObservable) {
  return animationFrames()
    .pipe(
      auditTime(1000 / 60),
      withLatestFrom(pauseObservable),
      filter(arr => !arr[1]),
      //startWith(init$)
      //takeUntil(destroy$)
    )
}
