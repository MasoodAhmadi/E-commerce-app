import slice from "../slice";

describe("slice", () => {
  it("should create a slice of an array from start up to, but not including, end", () => {
    const array = [1, 2, 3, 4];
    const expectedSlice = [3, 4];
    const actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it("should handle negative start and end indices", () => {
    const array = [1, 2, 3, 4];
    const expectedSlice = [2, 3];
    const actualSlice = slice(array, -2, -1);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it("should return an empty array if the array is empty", () => {
    const array = [];
    const expectedSlice = [];
    const actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it("should return an empty array if the start index is greater than the end index", () => {
    const array = [1, 2, 3, 4];
    const expectedSlice = [];
    const actualSlice = slice(array, 4, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });

  it("should handle an array of objects", () => {
    const array = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
    const expectedSlice = [{ c: 3 }, { d: 4 }];
    const actualSlice = slice(array, 2);
    expect(actualSlice).toEqual(expectedSlice);
  });
});
