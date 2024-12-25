import { describe, it, expect } from "vitest";
import { lowerCase } from "../lowerCase";

describe("lowerCase", () => {
  it("should convert a string to lowercase", () => {
    expect(lowerCase("HELLO")).toBe("hello");
    expect(lowerCase("Hello")).toBe("hello");
    expect(lowerCase("hello")).toBe("hello");
  });

  it("should handle empty strings", () => {
    expect(lowerCase("")).toBe("");
  });

  it("should handle strings with numbers and special characters", () => {
    expect(lowerCase("Hello123")).toBe("hello123");
    expect(lowerCase("Hello!@#")).toBe("hello!@#");
  });

  it("should handle strings with spaces", () => {
    expect(lowerCase("Hello World")).toBe("hello world");
  });
});
