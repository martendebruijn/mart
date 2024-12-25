import { describe, it, expect } from "vitest";
import { divide } from "../divide";

describe("divide", () => {
  it("should divide two positive numbers correctly", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("should divide a positive number by a negative number correctly", () => {
    expect(divide(6, -3)).toBe(-2);
  });

  it("should divide two negative numbers correctly", () => {
    expect(divide(-6, -3)).toBe(2);
  });

  it("should return 0 when the dividend is 0", () => {
    expect(divide(0, 3)).toBe(0);
  });

  it("should throw an error when the divisor is 0", () => {
    expect(() => divide(6, 0)).toThrow("utils/divide: Cannot divide by zero");
  });
});
