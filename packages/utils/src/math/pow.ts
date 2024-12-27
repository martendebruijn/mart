import { isNegative, isNumber } from "types";

/**
 * Calculates the power of a given base raised to a specified exponent.
 *
 * @param base - The base number to be raised to the power of the exponent.
 * @param exponent - The exponent to which the base number is raised.
 * @returns The result of the base raised to the power of the exponent.
 */
export function pow(base: number, exponent: number): number {
  if (!isNumber(base) && !isNumber(exponent))
    throw new Error("utils/pow: inputs should be numbers");
  if (base === 0 && isNegative(exponent)) return NaN;
  return base ** exponent;
}
