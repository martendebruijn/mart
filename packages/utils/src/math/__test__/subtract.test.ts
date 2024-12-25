import { describe, it, expect } from "vitest";
import { subtract } from "../subtract";

describe("subtract", () => {
  it("should return the difference of two positive numbers", () => {
    expect(subtract(10, 5)).toBe(5);
  });

  it("should return the difference of two negative numbers", () => {
    expect(subtract(-10, -5)).toBe(-5);
  });

  it("should return the difference of a positive and a negative number", () => {
    expect(subtract(10, -5)).toBe(15);
  });

  it("should return the difference of a negative and a positive number", () => {
    expect(subtract(-10, 5)).toBe(-15);
  });

  it("should return 0 when both numbers are the same", () => {
    expect(subtract(5, 5)).toBe(0);
  });

  it("should return the negative of the second number when the first number is 0", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  it("should return the first number when the second number is 0", () => {
    expect(subtract(5, 0)).toBe(5);
  });
});
