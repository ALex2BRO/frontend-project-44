const isPrime = require('./brain-prime');

describe('Brain Prime Game', () => {
  test('should identify prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test('should identify non-prime numbers', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(100)).toBe(false);
  });

  test('should handle edge cases', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-5)).toBe(false);
  });
});
