/**
 * Sums an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array.
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
