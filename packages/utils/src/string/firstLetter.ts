import { letter } from "./letter";

/**
 * Returns the first letter of the given string.
 *
 * @param string - The string from which to extract the first letter.
 * @returns The first letter of the input string.
 */
export function firstLetter(string: string): string {
  if (string === "") return "";
  return letter(string, 0);
}
