import { delay } from './delay';

export type RetryOptions = {
  retries: number;
  backoff: number; // Base delay in ms
  maxDelay?: number; // Optional max delay cap
  retryOnlyIf?: (error: unknown) => boolean;
};

/**
 * Retries an asynchronous action a specified number of times with exponential backoff.
 * @param {() => Promise<T>} action - The asynchronous action to retry.
 * @param {RetryOptions} options - The retry options.
 * @returns {Promise<T>} The result of the action if successful.
 * @throws {Error} The last error encountered if all retries fail.
 */
export async function retry<T>(
  action: () => Promise<T>,
  options: RetryOptions = { retries: 2, backoff: 500, maxDelay: 5000 },
): Promise<T> {
  const { retries, backoff, maxDelay = 5000, retryOnlyIf } = options;
  let attempt = 0;
  let lastError: unknown;

  while (attempt <= retries) {
    try {
      return await action();
    } catch (error) {
      lastError = error;

      if (retryOnlyIf && !retryOnlyIf(error)) {
        throw error;
      }

      attempt++;
      if (attempt <= retries) {
        let delayTime = Math.min(
          backoff * Math.pow(2, attempt - 1), // Exponential backoff
          maxDelay, // Cap the delay
        );

        const jitter = 1 + (Math.random() * 0.2 - 0.1); // ±10% jitter
        delayTime = Math.round(delayTime * jitter);

        await delay(delayTime);
      }
    }
  }

  throw new Error(
    `Retry attempts exhausted after ${retries} retries. Last error: ${
      lastError instanceof Error ? lastError.message : String(lastError)
    }`,
  );
}
