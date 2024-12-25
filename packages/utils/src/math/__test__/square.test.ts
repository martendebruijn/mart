import { describe, it, expect } from "vitest";
import { square } from "../square";
import { pow } from "../pow";

describe("square", () => {
  it("should return the square of a positive number", () => {
    expect(square(2)).toBe(4);
    expect(square(3)).toBe(9);
  });

  it("should return the square of a negative number", () => {
    expect(square(-2)).toBe(4);
    expect(square(-3)).toBe(9);
  });

  it("should return 0 when the base is 0", () => {
    expect(square(0)).toBe(0);
  });

  it("should return 1 when the base is 1", () => {
    expect(square(1)).toBe(1);
  });
});
