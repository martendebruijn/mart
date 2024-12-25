/**
 * Retrieves the item at the specified index from the given array.
 *
 * @template A - The type of the array.
 * @param {A} array - The array from which to retrieve the item.
 * @param {number} index - The index of the item to retrieve.
 * @returns {A[number]} - The item at the specified index in the array.
 */
export function item<A extends any[]>(array: A, index: number): A[number] {
  return array[index];
}
