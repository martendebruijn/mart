import { pow } from "./pow";

/**
 * Computes the square of a given number.
 *
 * @param base - The number to be squared.
 * @returns The square of the given number.
 */
export function square(base: number): number {
  return pow(base, 2);
}
