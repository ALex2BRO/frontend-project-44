const findGCD = require('./brain-gcd');

describe('Brain GCD Game', () => {
  test('should find GCD of two numbers', () => {
    expect(findGCD(12, 8)).toBe(4);
    expect(findGCD(15, 25)).toBe(5);
    expect(findGCD(7, 13)).toBe(1); // взаимно простые числа
  });

  test('should handle cases where one number is divisible by another', () => {
    expect(findGCD(10, 5)).toBe(5);
    expect(findGCD(16, 4)).toBe(4);
  });

  test('should work with same numbers', () => {
    expect(findGCD(7, 7)).toBe(7);
  });

  test('should handle zero cases', () => {
    expect(findGCD(0, 5)).toBe(5);
    expect(findGCD(5, 0)).toBe(5);
  });
});
