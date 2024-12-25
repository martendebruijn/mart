import { length } from "../array/length";
import { sum } from "./sum";
import { divide } from "./divide";

/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers to calculate the average of.
 * @returns {number} The average of the numbers.
 */
export function average(numbers: number[]): number {
  const divider = length(numbers);
  if (divider === 0) return NaN;
  const total = sum(numbers);
  return divide(total, divider);
}
