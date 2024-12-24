/**
 * Checks if a value is positive or negative infinity.
 *
 * @param x - The value to check.
 * @returns A boolean indicating whether the value is infinity.
 */
export function isInfinity(x: unknown): x is number {
  return x === Infinity || x === -Infinity;
}
