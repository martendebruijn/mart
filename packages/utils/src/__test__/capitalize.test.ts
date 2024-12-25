import { capitalize } from "../index";
import { describe, it, expect } from "vitest";

describe("capitalize", () => {
  it('should return "Capitalize" when the input is "capitalize', () => {
    const input = "capitalize";
    const expected = "Capitalize";

    expect(capitalize(input)).toBe(expected);
  });
});
