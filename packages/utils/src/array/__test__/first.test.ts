import { describe, it, expect } from "vitest";
import { first } from "../first";

describe("first", () => {
  it("should return the first element of a non-empty array", () => {
    const array = [1, 2, 3];
    const result = first(array);
    expect(result).toBe(1);
  });

  it("should return undefined for an empty array", () => {
    const array: any[] = [];
    const result = first(array);
    expect(result).toBeUndefined();
  });

  it("should return the first element of an array of strings", () => {
    const array = ["a", "b", "c"];
    const result = first(array);
    expect(result).toBe("a");
  });

  it("should return the first element of an array of objects", () => {
    const array = [{ id: 1 }, { id: 2 }];
    const result = first(array);
    expect(result).toEqual({ id: 1 });
  });
});
