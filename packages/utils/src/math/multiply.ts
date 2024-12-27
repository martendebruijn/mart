import { isNumber } from "types";

/**
 * Multiplies two numbers and returns the result.
 *
 * @param a - The first number to multiply.
 * @param b - The second number to multiply.
 * @returns The product of the two numbers.
 */
export function multiply(a: number, b: number): number {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("utils/multiply: inputs should be numbers");
  return a * b;
}
