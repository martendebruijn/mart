import { isArray } from "types";

/**
 * Returns the length of the given array.
 *
 * @param array - The array whose length is to be determined.
 * @returns The length of the array.
 */
export function length(array: unknown[]): number {
  if (!isArray(array))
    throw new Error("utils/length: input should be an array");
  return array.length;
}
