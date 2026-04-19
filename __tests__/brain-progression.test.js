const generateProgression = require('./brain-progression');

describe('Brain Progression Game', () => {
  test('should generate arithmetic progression with common difference 2', () => {
    const progression = generateProgression(5, 2, 5);
    expect(progression).toEqual([5, 7, 9, 11, 13]);
  });

  test('should generate progression with negative numbers', () => {
    const progression = generateProgression(-3, 3, 4);
    expect(progression).toEqual([-3, 0, 3, 6]);
  });

  test('should generate progression with negative difference', () => {
    const progression = generateProgression(10, -2, 5);
    expect(progression).toEqual([10, 8, 6, 4, 2]);
  });

  test('should generate single element progression', () => {
    const progression = generateProgression(7, 3, 1);
    expect(progression).toEqual([7]);
  });
});
