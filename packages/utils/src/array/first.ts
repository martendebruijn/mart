import { item } from "./item";
import { isArray } from "types";

/**
 * Returns the first element of an array.
 *
 * @template A - The type of the array.
 * @param {A} array - The array from which to retrieve the first element.
 * @returns {A[number]} The first element of the array.
 */
export function first<A extends any[]>(array: A): A[number] {
  if (!isArray(array))
    throw new Error("utils/first: parameter should be an array");
  return item(array, 0);
}
