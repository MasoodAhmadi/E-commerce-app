import memoize from "../memoize";

describe("memorize", () => {
  it("should memoize the result of a function", () => {
    const memoizedAdd = memoize((a, b) => a + b);

    const result1 = memoizedAdd(1, 2);
    const result2 = memoizedAdd(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(3); // Should be cached
  });

  it("should use the provided resolver to determine the cache key", () => {
    const memoizedToUpper = memoize(
      (str) => str.toUpperCase(),
      (str) => str[0]
    );

    const result1 = memoizedToUpper("hello");
    const result2 = memoizedToUpper("world");

    expect(result1).toBe("HELLO");
    expect(result2).toBe("WORLD");
  });

  it("should modify the result cache", () => {
    const memoizedAdd = memoize((a, b) => a + b);

    const result1 = memoizedAdd(1, 2);
    memoizedAdd.cache.set(1, 10);
    const result2 = memoizedAdd(1, 2);

    expect(result1).toBe(3);
    expect(result2).toBe(10); // Cache should be modified
  });

  it("should throw an error if the provided function is not a function", () => {
    expect(() => memoize("not a function")).toThrowError("Expected a function");
  });

  it("should throw an error if the provided resolver is not a function", () => {
    expect(() => memoize(() => {}, "not a function")).toThrowError(
      "Expected a function"
    );
  });
});
