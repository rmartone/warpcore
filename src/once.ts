/**
 * Creates a function that can only be invoked once. The result of the first invocation
 * is memoized, and subsequent calls return the result of the first invocation, without
 * re-executing the function.
 *
 * @template T - The return type of the function.
 * @template Args - The argument types of the function.
 * @param func - The function to be executed only once.
 * @returns A function that can only be invoked once.
 */
export const once = <T extends (...args: any[]) => any, Args extends any[]>(
  func: T,
): ((...args: Args) => ReturnType<T>) => {
  let hasExecuted = false;
  let result: ReturnType<T> | undefined;

  return (...args: Args): ReturnType<T> => {
    if (!hasExecuted) {
      result = func(...args);
      hasExecuted = true;
    }
    return result as ReturnType<T>;
  };
};
