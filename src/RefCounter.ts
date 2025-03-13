import { hashString } from './hashString';

/**
 * A generic reference counter for managing hashed keys with usage counts.
 */
export class RefCounter {
  private readonly _registry: Map<string, number> = new Map();

  /**
   * Generates a unique key for a given input using a hash function.
   * @param input The string to hash into a key.
   */
  public generateKey(input: string): string {
    return hashString(input);
  }

  /**
   * Increments the reference count for a given key. Initializes it if not present.
   * @param key The key to track.
   */
  public increment(key: string): number {
    const count = (this._registry.get(key) ?? 0) + 1;
    this._registry.set(key, count);
    return count;
  }

  /**
   * Decrements the reference count for a given key. Removes it if count reaches zero.
   * @param key The key to release.
   */
  public decrement(key: string): number {
    if (!this._registry.has(key)) return 0;

    const count = (this._registry.get(key) ?? 1) - 1;
    if (count <= 0) {
      this._registry.delete(key);
      return 0;
    } else {
      this._registry.set(key, count);
      return count;
    }
  }

  /**
   * Gets the current reference count for a given key.
   * @param key The key to check.
   */
  public getCount(key: string): number {
    return this._registry.get(key) ?? 0;
  }

  /**
   * Checks whether the given key exists in the registry.
   * @param key The key to check.
   */
  public has(key: string): boolean {
    return this._registry.has(key);
  }
}
