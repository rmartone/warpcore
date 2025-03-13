import hash from 'hash-it';

/**
 * Generates a stable hash from a string
 *
 * @param input - The string to hash.
 * @returns A hexadecimal hash.
 */
export const hashString = (input: string): string => {
  const hashValue = hash(input);
  return hashValue.toString(16);
};
