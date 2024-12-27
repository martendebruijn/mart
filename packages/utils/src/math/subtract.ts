import { isNumber } from "types";

/**
 * Subtracts the second number from the first number.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The result of `a` minus `b`.
 */
export function subtract(a: number, b: number): number {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("utils/subtract: inputs should be numbers");
  return a - b;
}
