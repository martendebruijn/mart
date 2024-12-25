import { describe, it, expect } from "vitest";
import { pow } from "../pow";

describe("pow", () => {
  it("should return 1 when the exponent is 0", () => {
    expect(pow(2, 0)).toBe(1);
  });

  it("should return the base when the exponent is 1", () => {
    expect(pow(2, 1)).toBe(2);
  });

  it("should return the correct power for positive exponents", () => {
    expect(pow(2, 3)).toBe(8);
    expect(pow(5, 2)).toBe(25);
  });

  it("should return the correct power for negative exponents", () => {
    expect(pow(2, -1)).toBe(0.5);
    expect(pow(4, -2)).toBe(0.0625);
  });

  it("should return 0 when the base is 0 and the exponent is positive", () => {
    expect(pow(0, 5)).toBe(0);
  });

  // it("should return NaN when the base is 0 and the exponent is negative", () => {
  //   expect(pow(0, -1)).toBeNaN();
  // });

  // it("should return NaN when the base is negative and the exponent is a non-integer", () => {
  //   expect(pow(-2, 0.5)).toBeNaN();
  // });
});
