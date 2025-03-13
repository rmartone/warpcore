import { ErrorMessage } from './ErrorMessage';
import { log, tag } from './logger';

/**
 * Retrieves the class name of a given object or class.
 *
 * @param obj - The object or class to get the name from.
 * @returns The class name, or throws an error if it cannot be determined.
 */
export const getClassName = (obj: unknown): string => {
  if (obj && typeof obj === 'object' && obj.constructor) {
    return obj.constructor.name;
  }

  // Supports getting class name from class itself
  if (typeof obj === 'function') {
    return obj.name;
  }

  log.warn(tag.system, ErrorMessage.UnknownClass, obj);
  return 'UnknownClass';
};
