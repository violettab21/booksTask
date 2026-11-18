export function debounce(func) {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
    }, 500);
  };
}
