/**
 * Divides two numbers and returns the result.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The result of the division.
 * @throws Will throw an error if the divisor is zero.
 */
export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("utils/divide: Cannot divide by zero");
  return a / b;
}
