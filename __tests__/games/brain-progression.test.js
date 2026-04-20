import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { fourthGame, finish4 } from '../../src/games/brain-progression.js';

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}));

jest.mock('../../src/cli.js', () => ({
  userName: 'TestUser',
}));

describe('Brain Progression Game (fourthGame)', () => {
  let consoleLogSpy;
  let readlineQuestionSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    readlineQuestionSpy = readlineSync.question;
    readlineQuestionSpy.mockClear();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should congratulate user after 3 correct answers', () => {
    jest.spyOn(Math, 'random')
      // Итерация 1: прогрессия 5 10 15 .. 25 30 (пропущен 20)
      .mockReturnValueOnce(0.2)   // progressionLastIndex = 6
      .mockReturnValueOnce(0.1)   // progressionStep = 5
      .mockReturnValueOnce(0.05)  // startIndex = 5
      .mockReturnValueOnce(0.4)   // current = 3
      // Итерация 2: прогрессия 3 6 9 .. 15 18 (пропущен 12)
      .mockReturnValueOnce(0.3)   // progressionLastIndex = 7
      .mockReturnValueOnce(0.1)   // progressionStep = 3
      .mockReturnValueOnce(0.03)  // startIndex = 3
      .mockReturnValueOnce(0.5)   // current = 4
      // Итерация 3: прогрессия 2 4 6 .. 10 12 (пропущен 8)
      .mockReturnValueOnce(0.4)   // progressionLastIndex = 8
      .mockReturnValueOnce(0.1)   // progressionStep = 2
      .mockReturnValueOnce(0.02)  // startIndex = 2
      .mockReturnValueOnce(0.6);  // current = 4

    readlineQuestionSpy
      .mockReturnValueOnce('20')
      .mockReturnValueOnce('12')
      .mockReturnValueOnce('8');

    fourthGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('What number is missing in the progression?');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, 'Correct!');
    expect(consoleLogSpy).toHaveBeenCalledWith(`Congratulations, TestUser!`);
    expect(finish4).toBe(1);
  });

  test('should show error message and retry on wrong answer', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)  // progressionLastIndex = 5
      .mockReturnValueOnce(0.1)  // progressionStep = 5
      .mockReturnValueOnce(0.04) // startIndex = 4
      .mockReturnValueOnce(0.3);  // current = 2 → прогрессия 4 9 14 .. 24 29, пропущен 19


    readlineQuestionSpy
      .mockReturnValueOnce('19')
      .mockReturnValueOnce('99');


    fourthGame();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, "'99' is wrong answer ;(. Correct answer was '19'.");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, "Let's try again, TestUser!");
  });
});
