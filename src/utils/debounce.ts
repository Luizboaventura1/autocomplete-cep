type DebouncedFunction<T extends any[]> = (...args: T) => void;

export default function debounce<T extends any[]>(
  func: DebouncedFunction<T>,
  debounceDelay: number
) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: T) {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
      timeoutId = undefined;
    }, debounceDelay);
  };
}
