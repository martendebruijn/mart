import { describe, it, expect } from "vitest";
import { length } from "../length";

describe("length", () => {
  it("should return 0 for an empty array", () => {
    expect(length([])).toBe(0);
  });

  it("should return the correct length for a non-empty array", () => {
    expect(length([1, 2, 3])).toBe(3);
  });

  it("should return the correct length for an array with different types of elements", () => {
    expect(length([1, "two", { three: 3 }, [4]])).toBe(4);
  });

  it("should return the correct length for an array with undefined elements", () => {
    expect(length([undefined, undefined])).toBe(2);
  });

  it("should return the correct length for an array with null elements", () => {
    expect(length([null, null, null])).toBe(3);
  });
});
