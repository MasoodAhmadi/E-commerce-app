import map from "../map";

describe("map", () => {
  it("should map an array of numbers to their squares", () => {
    const square = (n) => n * n;
    const input = [4, 8];
    const expectedOutput = [16, 64];
    const output = map(input, square);
    expect(output).toEqual(expectedOutput);
  });

  it("should handle empty arrays", () => {
    const square = (n) => n * n;
    const input = [];
    const expectedOutput = [];
    const output = map(input, square);
    expect(output).toEqual(expectedOutput);
  });

  it("should work with objects as input", () => {
    const input = [{ a: 1 }, { a: 2 }, { a: 3 }];
    const expectedOutput = [{ a: 2 }, { a: 4 }, { a: 6 }];
    const output = map(input, (obj) => obj.a * 2);
    expect(output).toEqual(expectedOutput);
  });

  it("should not modify the original array", () => {
    const input = [4, 8];
    const square = (n) => n * n;
    map(input, square);
    expect(input).toEqual([4, 8]);
  });
});
