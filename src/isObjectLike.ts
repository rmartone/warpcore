/**
 * Returns `true` if `value` is a non-null object (including arrays), but not a function.
 * Acts as a TypeScript type guard.
 *
 * @param value - The value to check.
 * @returns Whether `value` is an object-like structure.
 */
export const isObjectLike = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};
