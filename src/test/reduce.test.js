import reduce from "../reduce";

describe("reduce", () => {
  it("should reduce an array to a single value", () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = reduce(
      numbers,
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    expect(sum).toBe(15);
  });

  it("should handle an empty array with a provided accumulator", () => {
    const emptyArray = [];
    const accumulator = 10;
    const reducedValue = reduce(
      emptyArray,
      (accumulator) => accumulator,
      accumulator
    );
    expect(reducedValue).toBe(10);
  });

  it("should use the first element of the array as the accumulator if no accumulator is provided", () => {
    const numbers = [1, 2, 3, 4, 5];
    const product = reduce(
      numbers,
      (accumulator, currentValue) => accumulator * currentValue
    );
    expect(product).toBe(120);
  });

  it("should work with objects", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const sumOfValues = reduce(
      obj,
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    expect(sumOfValues).toBe(6);
  });

  it("should handle custom iteratee functions", () => {
    const numbers = [1, 2, 3, 4, 5];
    const squares = reduce(
      numbers,
      (accumulator, currentValue) => {
        accumulator.push(currentValue * currentValue);
        return accumulator;
      },
      []
    );
    expect(squares).toEqual([1, 4, 9, 16, 25]);
  });
});
