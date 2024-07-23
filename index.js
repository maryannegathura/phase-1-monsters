// Assuming helpers.js exports these functions
const { sum, multiply, divide } = require("./helpers.js");

describe("Helper Functions", () => {
  describe("sum function", () => {
    it("should add two numbers correctly", () => {
      // Test case 1: Positive numbers
      expect(sum(1, 2)).toBe(3); // 1 + 2 = 3

      // Test case 2: Negative numbers
      expect(sum(-1, -2)).toBe(-3); // -1 + (-2) = -3

      // Test case 3: Mixed positive and negative numbers
      expect(sum(5, -3)).toBe(2); // 5 + (-3) = 2

      // Test case 4: Zeroes
      expect(sum(0, 0)).toBe(0); // 0 + 0 = 0
    });
  });

  describe("multiply function", () => {
    it("should multiply two numbers correctly", () => {
      // Test case 1: Positive numbers
      expect(multiply(2, 3)).toBe(6); // 2 * 3 = 6

      // Test case 2: Negative numbers
      expect(multiply(-4, 5)).toBe(-20); // -4 * 5 = -20

      // Test case 3: Multiplication by zero
      expect(multiply(0, 10)).toBe(0); // 0 * 10 = 0

      // Test case 4: Identity property
      expect(multiply(1, 1)).toBe(1); // 1 * 1 = 1
    });
  });

  describe("divide function", () => {
    it("should divide two numbers correctly", () => {
      // Test case 1: Division of positive numbers
      expect(divide(6, 2)).toBe(3); // 6 / 2 = 3

      // Test case 2: Division of negative numbers
      expect(divide(-10, -2)).toBe(5); // -10 / -2 = 5

      // Test case 3: Division by zero (expecting error)
      expect(() => divide(4, 0)).toThrowError("Division by zero"); // Division by zero should throw an error
    });
  });
});
