import compact from "../compact";

describe("compact", () => {
  it("should remove falsey values from an array", () => {
    const inputArray = [0, 1, false, 2, "", 3];
    const expectedResult = [1, 2, 3];

    const result = compact(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should handle empty arrays", () => {
    const inputArray = [];
    const expectedResult = [];

    const result = compact(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should handle arrays containing only falsey values", () => {
    const inputArray = [0, false, null, "", undefined, NaN];
    const expectedResult = [];

    const result = compact(inputArray);
    expect(result).toEqual(expectedResult);
  });

  it("should not mutate the original array", () => {
    const inputArray = [0, 1, false, 2, "", 3];
    const originalArray = [...inputArray];

    compact(inputArray);
    expect(inputArray).toEqual(originalArray);
  });
});
