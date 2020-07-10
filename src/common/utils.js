export function debounce(fun, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fun.apply(this, args);
    }, delay)
    // timer = setTimeout(fun, delay)
  }
}