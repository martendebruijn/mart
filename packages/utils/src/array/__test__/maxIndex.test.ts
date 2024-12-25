import { describe, it, expect } from "vitest";
import { maxIndex } from "../maxIndex";

describe("maxIndex", () => {
  it("should return -1 for an empty array", () => {
    expect(maxIndex([])).toBe(-1);
  });

  it("should return 0 for an array with one element", () => {
    expect(maxIndex([1])).toBe(0);
  });

  it("should return the correct index for an array with multiple elements", () => {
    expect(maxIndex([1, 2, 3])).toBe(2);
    expect(maxIndex(["a", "b", "c", "d"])).toBe(3);
  });

  it("should handle arrays with different types of elements", () => {
    expect(maxIndex([1, "a", true, null])).toBe(3);
  });
});
