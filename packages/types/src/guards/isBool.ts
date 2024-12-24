/**
 * Checks if the given value is of type boolean.
 *
 * @param x - The value to check.
 * @returns True if the value is a boolean, otherwise false.
 */
export function isBool(x: unknown): x is boolean {
  return typeof x === "boolean";
}
