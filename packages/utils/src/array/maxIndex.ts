import { length } from "./length";
import { subtract } from "../math/subtract";

/**
 * Returns the maximum valid index for the given array.
 *
 * @param array - The array to determine the maximum index for.
 * @returns The maximum index of the array.
 */
export function maxIndex(array: unknown[]): number {
  return subtract(length(array), 1);
}
