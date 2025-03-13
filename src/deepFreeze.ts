import { forOwn } from './forOwn';
import { isObject } from './isObject';
import { isObjectLike } from './isObjectLike';

export function deepFreeze<T>(obj: T): T {
  if (!isObjectLike(obj)) {
    throw new TypeError('Expected an object');
  }

  if (Object.isFrozen(obj)) {
    return obj;
  }

  forOwn(obj, value => {
    if (isObject(value) && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  for (const key of Object.getOwnPropertySymbols(obj)) {
    const value = (obj as any)[key];
    if (isObject(value) && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}
