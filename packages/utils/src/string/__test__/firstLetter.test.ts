import { describe, it, expect } from "vitest";
import { firstLetter } from "../firstLetter";

describe("firstLetter", () => {
  it("should return the first letter of a given string", () => {
    expect(firstLetter("hello")).toBe("h");
    expect(firstLetter("world")).toBe("w");
    expect(firstLetter("Vitest")).toBe("V");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(firstLetter("")).toBe("");
  });

  it("should handle strings with leading spaces", () => {
    expect(firstLetter(" hello")).toBe(" ");
    expect(firstLetter(" world")).toBe(" ");
  });
});
