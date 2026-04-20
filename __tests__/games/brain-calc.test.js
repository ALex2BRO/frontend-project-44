import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { secondGame, finish2 } from '../../src/games/brain-calc.js';

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}));

jest.mock('../../src/cli.js', () => ({
  userName: 'TestUser',
}));

describe('Brain Calc Game (secondGame)', () => {
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
      // Итерация 1: 5 + 3 = 8
      .mockReturnValueOnce(0.04)  // a = 5
      .mockReturnValueOnce(0.02)  // b = 3
      .mockReturnValueOnce(0.33)  // signChange = 1 (+)
      // Итерация 2: 10 - 4 = 6
      .mockReturnValueOnce(0.09)  // a = 10
      .mockReturnValueOnce(0.03)  // b = 4
      .mockReturnValueOnce(0.66)  // signChange = 2 (-)
      // Итерация 3: 7 * 2 = 14
      .mockReturnValueOnce(0.15)  // a = 7
      .mockReturnValueOnce(0.20)  // b = 2
      .mockReturnValueOnce(0.99); // signChange = 3 (*)

    readlineQuestionSpy
      .mockReturnValueOnce('8')
      .mockReturnValueOnce('6')
      .mockReturnValueOnce('14');

    secondGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('What is the result of the expression?');

    // Проверка сообщений для первой итерации (сложение)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 5 + 3 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 8');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');

    // Проверка сообщений для второй итерации (вычитание)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 10 - 4 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 6');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, 'Correct!');

    // Проверка сообщений для третьей итерации (умножение)
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, 'Question: 7 * 2 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, 'Your answer: 14');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(10, 'Correct!');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(11, `Congratulations, TestUser!`);
    expect(finish2).toBe(1);
  });

  test('should show error message and retry on wrong answer', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.05)  // a = 6
      .mockReturnValueOnce(0.03)  // b = 4
      .mockReturnValueOnce(0.33); // signChange = 1 (+) → 6 + 4 = 10

    readlineQuestionSpy
      .mockReturnValueOnce('10')
      .mockReturnValueOnce('99');

    secondGame();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 6 + 4 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 10');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 6 + 4 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 99');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "'99' is wrong answer ;(. Correct answer was '10'.");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, `Let's try again, TestUser!`);
  });
});
