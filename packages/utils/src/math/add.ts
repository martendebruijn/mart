import { isNumber } from "types";

/**
 * Adds two numbers together.
 *
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of `a` and `b`.
 */
export function add(a: number, b: number): number {
  if (!isNumber(a) || !isNumber(b))
    throw new Error("utils/add: input should be numbers");
  return a + b;
}
