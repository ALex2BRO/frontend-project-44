const { runGame } = require('../bin/brain-games');

describe('Brain Games Main', () => {
  test('should initialize game with correct parameters', () => {
    const game = runGame('even', 'Answer "yes" if the number is even, otherwise answer "no".');
    expect(game).toBeDefined();
  });

  test('should display welcome message', () => {
    // Здесь можно добавить проверку вывода приветствия
    // через mocking console.log
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    runGame('even', 'Test game');
    expect(consoleLogMock).toHaveBeenCalledWith('Welcome to the Brain Games!');
    consoleLogMock.mockRestore();
  });
});
