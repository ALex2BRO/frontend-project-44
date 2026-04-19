const isEven = require('./brain-even');

describe('Brain Even Game', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(100)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  test('should handle negative numbers correctly', () => {
    expect(isEven(-2)).toBe(true);
    expect(isEven(-1)).toBe(false);
  });
});
