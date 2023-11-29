import camelCase from "../camelCase";

describe("camelCase", () => {
  it("should convert a single word to camel case", () => {
    const input = "foo";
    const expectedOutput = "foo";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });

  it("should convert multiple words to camel case", () => {
    const input = "foo bar";
    const expectedOutput = "fooBar";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });

  it("should convert words separated by underscores, hyphens, or spaces to camel case", () => {
    const input = "foo_bar-baz";
    const expectedOutput = "fooBarBaz";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });

  it("should handle words starting with uppercase letters", () => {
    const input = "FooBar";
    const expectedOutput = "FooBar";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });

  it("should handle words containing uppercase letters", () => {
    const input = "fooBarBAZ";
    const expectedOutput = "fooBarBaz";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });

  it("should handle words containing apostrophes", () => {
    const input = "foo's Bar";
    const expectedOutput = "fooSBar";
    const output = camelCase(input);
    expect(output).toBe(expectedOutput);
  });
});
