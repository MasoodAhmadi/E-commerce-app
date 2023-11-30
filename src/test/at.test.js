import at from '../at';

describe('at', () => {
  it('should return an array of values corresponding to paths of object', () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    const paths = ['a[0].b.c', 'a[1]'];
    const expected = [3, 4];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with array indices', () => {
    const object = { a: [1, 2, 3] };
    const paths = ['a[0]', 'a[2]'];
    const expected = [1, 3];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with nested objects', () => {
    const object = { a: { b: { c: 3 } }, d: 5 };
    const paths = ['a.b.c', 'd'];
    const expected = [3, 5];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with undefined properties', () => {
    const object = { a: {} };
    const paths = ['a.b.c'];
    const expected = [undefined];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle paths with null values', () => {
    const object = { a: null };
    const paths = ['a.b.c'];
    const expected = [null];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });

  it('should handle multiple paths', () => {
    const object = { a: 1, b: 2, c: 3 };
    const paths = ['a', 'b', 'c'];
    const expected = [1, 2, 3];
    const actual = at(object, ...paths);
    expect(actual).toEqual(expected);
  });
});
