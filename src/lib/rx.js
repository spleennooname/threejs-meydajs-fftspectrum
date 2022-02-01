

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
  distinctUntilChanged
} from "rxjs";

export function resizeObserver$(el) {
  return new Observable(subscriber => {
    // https://web.dev/resize-observer/
    let ro = new ResizeObserver(entries => {
      subscriber.next(entries);
    });
    try {
      // only call us of the number of device pixels changed
      ro.observe(el, {box: 'device-pixel-content-box'});
    } catch (ex) {
      // device-pixel-content-box is not supported so fallback to this
      ro.observe(el, {box: 'content-box'});
    }
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

export function renderWithPause$(pause$) {
  return animationFrames()
    .pipe(
      //auditTime(1000 / fps),
      withLatestFrom(pause$),
      filter(arr => !arr[1]),
      //takeUntil(destroy$)
    )
}
