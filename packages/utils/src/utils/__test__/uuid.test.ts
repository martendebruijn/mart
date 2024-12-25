import { describe, it, expect } from "vitest";
import { uuid } from "../uuid";

describe("uuid", () => {
  it("should generate a valid UUID", () => {
    const id = uuid();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(id).toMatch(uuidRegex);
  });

  it("should generate unique UUIDs", () => {
    const id1 = uuid();
    const id2 = uuid();
    expect(id1).not.toBe(id2);
  });
});
