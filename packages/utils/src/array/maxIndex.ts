import { length } from "./length";
import { subtract } from "../math/subtract";
import { isArray } from "types";

/**
 * Returns the maximum valid index for the given array.
 *
 * @param array - The array to determine the maximum index for.
 * @returns The maximum index of the array.
 */
export function maxIndex(array: unknown[]): number {
  if (!isArray(array))
    throw new Error("utils/maxIndex: input should be an array");
  return subtract(length(array), 1);
}
