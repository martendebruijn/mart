import { item } from "./item";

/**
 * Returns the first element of an array.
 *
 * @template A - The type of the array.
 * @param {A} array - The array from which to retrieve the first element.
 * @returns {A[number]} The first element of the array.
 */
export function first<A extends any[]>(array: A): A[number] {
  return item(array, 0);
}
