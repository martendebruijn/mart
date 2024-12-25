import { describe, it, expect } from "vitest";
import { last } from "../last";

describe("last", () => {
  it("should return the last element of a non-empty array", () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(["a", "b", "c"])).toBe("c");
    expect(last([true, false, true])).toBe(true);
  });

  it("should return undefined for an empty array", () => {
    expect(last([])).toBeUndefined();
  });

  it("should work with arrays of different types", () => {
    expect(last([1, "a", true])).toBe(true);
    expect(last([{ key: "value" }, 2, null])).toBe(null);
  });
});
