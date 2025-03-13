import { isObjectLike } from './isObjectLike';

/**
 * Iterates over an object's own enumerable properties, invoking `iteratee`
 * for each value that is an object.
 *
 * @param obj - The object to iterate over.
 * @param iteratee - The function invoked per iteration.
 */
export const forOwn = (obj: unknown, iteratee: (value: object) => void): void => {
  if (!isObjectLike(obj)) return;

  // Type refinement to ensure obj is treated as Record<string, unknown>
  for (const [_, value] of Object.entries(obj)) {
    if (isObjectLike(value)) {
      iteratee(value);
      forOwn(value, iteratee);
    }
  }
};
