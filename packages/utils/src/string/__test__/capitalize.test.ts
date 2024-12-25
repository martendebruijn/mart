import { describe, it, expect } from "vitest";
import { capitalize } from "../capitalize";
import { upperCase } from "../upperCase";
import { firstLetter } from "../firstLetter";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return an empty string if input is empty", () => {
    expect(capitalize("")).toBe("");
  });

  it("should handle single character strings", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("should not change the rest of the string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });

  it("should handle strings with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
  });

  it("should handle strings with numbers", () => {
    expect(capitalize("123hello")).toBe("123hello");
  });
});
