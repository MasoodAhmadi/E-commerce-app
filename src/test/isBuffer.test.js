import isBuffer from "../isBuffer";

describe("isBuffer", () => {
  it("should return true for Buffer instances", () => {
    const buffer = Buffer.alloc(2);
    expect(isBuffer(buffer)).toBe(true);
  });

  it("should return false for non-Buffer instances", () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer(false)).toBe(false);
    expect(isBuffer(true)).toBe(false);
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer("hello")).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer([])).toBe(false);
  });
});
