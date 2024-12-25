import { upperCase } from "./upperCase";
import { firstLetter } from "./firstLetter";

/**
 * Capitalizes the first letter of the given string.
 *
 * @param string - The string to capitalize.
 * @returns The input string with the first letter capitalized.
 */
export function capitalize(string: string): string {
  return upperCase(firstLetter(string)) + string.slice(1);
}
