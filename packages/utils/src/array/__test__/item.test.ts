import { describe, it, expect } from "vitest";
import { item } from "../item";

describe("item", () => {
  it("should return the item at the specified index", () => {
    const array = [1, 2, 3, 4, 5];
    expect(item(array, 2)).toBe(3);
  });

  it("should return undefined if the index is out of bounds", () => {
    const array = [1, 2, 3, 4, 5];
    expect(item(array, 10)).toBeUndefined();
  });

  it("should work with an array of strings", () => {
    const array = ["a", "b", "c", "d"];
    expect(item(array, 1)).toBe("b");
  });

  it("should work with an array of objects", () => {
    const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(item(array, 2)).toEqual({ id: 3 });
  });

  it("should return undefined for negative indices", () => {
    const array = [1, 2, 3, 4, 5];
    expect(item(array, -1)).toBeUndefined();
  });
});
