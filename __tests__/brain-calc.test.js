const calculate = require('./brain-calc');

describe('Brain Calc Game', () => {
  test('should correctly add numbers', () => {
    expect(calculate(5, 3, '+')).toBe(8);
    expect(calculate(0, 10, '+')).toBe(10);
  });

  test('should correctly subtract numbers', () => {
    expect(calculate(10, 3, '-')).toBe(7);
    expect(calculate(5, 5, '-')).toBe(0);
  });

  test('should correctly multiply numbers', () => {
    expect(calculate(4, 3, '*')).toBe(12);
    expect(calculate(0, 100, '*')).toBe(0);
  });

  test('should throw error for unsupported operations', () => {
    expect(() => calculate(5, 3, '%')).toThrow('Unsupported operation');
  });
});
