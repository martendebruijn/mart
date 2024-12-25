import { describe, it, expect } from "vitest";
import { upperCase } from "../upperCase";

describe("upperCase", () => {
  it("should convert a lowercase string to uppercase", () => {
    expect(upperCase("hello")).toBe("HELLO");
  });

  it("should convert a mixed case string to uppercase", () => {
    expect(upperCase("HeLLo")).toBe("HELLO");
  });

  it("should return an already uppercase string unchanged", () => {
    expect(upperCase("HELLO")).toBe("HELLO");
  });

  it("should handle an empty string", () => {
    expect(upperCase("")).toBe("");
  });

  it("should handle a string with numbers and special characters", () => {
    expect(upperCase("hello123!")).toBe("HELLO123!");
  });
});
