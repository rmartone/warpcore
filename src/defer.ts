import { ErrorMessage } from './ErrorMessage';
import { runImmediate } from './env';

/**
 * Defers the execution of a function.
 *
 * @param {() => void} callback - The function to defer.
 * @param {number} [delay=0] - The delay in milliseconds before executing the function.
 * @returns {Promise<void>} A promise that resolves after the function executes.
 */
export const defer = (callback: () => void, delay = 0): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const execute = () => {
      try {
        callback();
        resolve();
      } catch (error) {
        reject(error instanceof Error ? error : new Error(String(error || ErrorMessage.UnknownError)));
      }
    };

    if (delay > 0) {
      setTimeout(execute, delay);
    } else {
      runImmediate(execute);
    }
  });
};
