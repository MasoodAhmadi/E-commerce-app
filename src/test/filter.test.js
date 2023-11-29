import filter from "../filter";

describe("filter", () => {
  describe("when the array is empty", () => {
    it("should return an empty array", () => {
      const array = [];
      const predicate = () => true;
      expect(filter(array, predicate)).toEqual([]);
    });
  });

  describe("when the array contains elements", () => {
    it("should return an array of all elements for which the predicate returns truthy", () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (num) => num % 2 === 0;
      expect(filter(array, predicate)).toEqual([2, 4]);
    });

    it("should not modify the original array", () => {
      const array = [1, 2, 3, 4, 5];
      const predicate = (num) => num % 2 === 0;
      const filteredArray = filter(array, predicate);
      expect(array).toEqual([1, 2, 3, 4, 5]);
      expect(filteredArray).not.toBe(array);
    });

    it("should handle arrays with objects", () => {
      const users = [
        { name: "Barney", active: true },
        { name: "Fred", active: false },
      ];
      const predicate = ({ active }) => active;
      expect(filter(users, predicate)).toEqual([
        { name: "Barney", active: true },
      ]);
    });
  });

  describe("when the predicate throws an error", () => {
    it("should rethrow the error", () => {
      const array = [1, 2, 3];
      const predicate = () => {
        throw new Error("Error!");
      };
      expect(() => filter(array, predicate)).toThrow("Error!");
    });
  });
});
