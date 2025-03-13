import { isObjectLike } from './isObjectLike';

/**
 * Returns `true` if `value` is a non-null object, but not a function.
 * Uses `isObjectLike` to check if the value is object-like.
 *
 * @param value - The value to check.
 * @returns Whether `value` is an object.
 */
export const isObject = (value: unknown): value is object => isObjectLike(value) && !(value instanceof Function);
