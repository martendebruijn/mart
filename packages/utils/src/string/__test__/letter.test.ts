import { describe, it, expect } from "vitest";
import { letter } from "../letter";

describe("letter", () => {
  it("should return the character at the specified index", () => {
    expect(letter("hello", 0)).toBe("h");
    expect(letter("hello", 1)).toBe("e");
    expect(letter("hello", 2)).toBe("l");
    expect(letter("hello", 3)).toBe("l");
    expect(letter("hello", 4)).toBe("o");
  });

  it("should return undefined for an out-of-bounds index", () => {
    expect(letter("hello", 5)).toBeUndefined();
    expect(letter("hello", -1)).toBeUndefined();
  });

  it("should handle empty strings", () => {
    expect(letter("", 0)).toBeUndefined();
  });

  // it("should handle non-string inputs gracefully", () => {
  //   // @ts-expect-error
  //   expect(letter(null, 0)).toBeUndefined();
  //   // @ts-expect-error
  //   expect(letter(undefined, 0)).toBeUndefined();
  // });
});
