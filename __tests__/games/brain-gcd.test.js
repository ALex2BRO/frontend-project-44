import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { thirdGame, finish3 } from '../../src/games/brain-gcd.js';

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}));

jest.mock('../../src/cli.js', () => ({
  userName: 'TestUser',
}));

describe('Brain GCD Game (thirdGame)', () => {
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
    // Замокаем Math.random для предсказуемых результатов
    jest.spyOn(Math, 'random')
      // Итерация 1: НОД(12, 8) = 4
      .mockReturnValueOnce(0.11)  // a = 12
      .mockReturnValueOnce(0.07)  // b = 8
      // Итерация 2: НОД(15, 25) = 5
      .mockReturnValueOnce(0.14)  // a = 15
      .mockReturnValueOnce(0.24)  // b = 25
      // Итерация 3: НОД(21, 14) = 7
      .mockReturnValueOnce(0.20)  // a = 21
      .mockReturnValueOnce(0.13); // b = 14

    readlineQuestionSpy
      .mockReturnValueOnce('4')
      .mockReturnValueOnce('5')
      .mockReturnValueOnce('7');

    thirdGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('Find the greatest common divisor of given numbers.');

    // Проверка сообщений для первой итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 12 8 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 4');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');

    // Проверка сообщений для второй итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 15 25 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 5');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, 'Correct!');
    // Проверка сообщений для третьей итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, 'Question: 21 14 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, 'Your answer: 7');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(10, 'Correct!');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(11, `Congratulations, TestUser!`);
    expect(finish3).toBe(1);
  });

  test('should show error message and retry on wrong answer', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.17)  // a = 18
      .mockReturnValueOnce(0.11); // b = 12 → НОД(18, 12) = 6

    readlineQuestionSpy
      .mockReturnValueOnce('6')
      .mockReturnValueOnce('99');

    thirdGame();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 18 12 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 6');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 18 12 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 99');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "'99' is wrong answer ;(. Correct answer was '6'.");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, `Let's try again, TestUser!`);
  });
});
