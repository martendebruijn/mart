import { item } from "./item";
import { maxIndex } from "./maxIndex";
import { isArray } from "types";

/**
 * Returns the last element of an array.
 *
 * @template A - The type of the array.
 * @param {A} array - The array from which to retrieve the last element.
 * @returns {A[number]} - The last element of the array.
 */
export function last<A extends any[]>(array: A): A[number] {
  if (!isArray(array)) throw new Error("utils/last: input should be an array");
  return item(array, maxIndex(array));
}
