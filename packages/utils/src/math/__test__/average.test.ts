import { describe, it, expect } from "vitest";
import { average } from "../average";

describe("average", () => {
  it("should calculate the average of an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];

    const result = average(numbers);

    expect(result).toBe(3);
  });

  it("should return NaN when dividing by zero", () => {
    const numbers: number[] = [];

    const result = average(numbers);

    expect(result).toBeNaN();
  });

  it("should handle an array with one number", () => {
    const numbers = [10];

    const result = average(numbers);

    expect(result).toBe(10);
  });
});
