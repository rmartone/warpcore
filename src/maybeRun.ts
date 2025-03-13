/**
 * Executes the provided function with a given probability.
 *
 * @template T The return type of the function.
 * @param {() => T} fn - The function to execute.
 * @param {number} chance - A number between `0` and `1` representing the probability of execution.
 *                           - `0` means it never runs.
 *                           - `1` means it always runs.
 * @returns {T | undefined} The return value of `fn` if executed, otherwise `undefined`.
 */
export const maybeRun = <T>(fn: () => T, chance: number): T | undefined => {
  if (chance <= 0) return undefined;
  if (chance >= 1) return fn();
  return Math.random() < chance ? fn() : undefined;
};
