import { pow } from "./pow";
import { isNumber } from "types";

/**
 * Computes the square of a given number.
 *
 * @param base - The number to be squared.
 * @returns The square of the given number.
 */
export function square(base: number): number {
  if (!isNumber(base))
    throw new Error("utils/square: input should be a number");
  return pow(base, 2);
}
