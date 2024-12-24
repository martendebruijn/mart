/**
 * Checks if a value is defined.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is defined.
 */
export function isDefined<T>(x: T | unknown): x is T {
  return typeof x !== "undefined";
}
