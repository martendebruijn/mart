import { describe, it, expect } from "vitest";
import { sum } from "../sum";

describe("sum", () => {
  it("should return 0 for an empty array", () => {
    expect(sum([])).toBe(0);
  });

  it("should return the sum of all numbers in the array", () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([10, 20, 30])).toBe(60);
  });

  it("should handle negative numbers correctly", () => {
    expect(sum([-1, -2, -3, -4])).toBe(-10);
    expect(sum([-10, 20, -30])).toBe(-20);
  });

  it("should handle an array with a single number", () => {
    expect(sum([5])).toBe(5);
  });

  it("should handle an array with both positive and negative numbers", () => {
    expect(sum([1, -2, 3, -4])).toBe(-2);
  });
});
