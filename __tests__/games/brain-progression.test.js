import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { fourthGame, finish4 } from '../src/games/brain-progression.js';

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
    // Замокаем Math.random для предсказуемых результатов
    jest.spyOn(Math, 'random')
      // Итерация 1
      .mockReturnValueOnce(0.2)  // progressionLastIndex = 6
      .mockReturnValueOnce(0.1)  // progressionStep = 10
      .mockReturnValueOnce(0.05) // startIndex = 5
      .mockReturnValueOnce(0.4)  // current = 3 → пропущен элемент на позиции 3
      // Итерация 2
      .mockReturnValueOnce(0.3)  // progressionLastIndex = 7
      .mockReturnValueOnce(0.15) // progressionStep = 15
      .mockReturnValueOnce(0.03) // startIndex = 3
      .mockReturnValueOnce(0.5)  // current = 4
      // Итерация 3
      .mockReturnValueOnce(0.4)  // progressionLastIndex = 8
      .mockReturnValueOnce(0.2)  // progressionStep = 20
      .mockReturnValueOnce(0.02) // startIndex = 2
      .mockReturnValueOnce(0.6); // current = 5

    // Прогрессии:
    // 1: 5 15 25 .. 45 55 → пропущен 35
    // 2: 3 18 33 48 .. 78 93 → пропущен 63
    // 3: 2 22 42 62 82 .. 122 → пропущен 102

    readlineQuestionSpy
      .mockReturnValueOnce('35')
      .mockReturnValueOnce('63')
      .mockReturnValueOnce('102');

    fourthGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('What number is missing in the progression?');

    // Проверка сообщений для первой итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 5 15 25 .. 45 55 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 35');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');

    // Проверка сообщений для второй итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 3 18 33 48 .. 78 93 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 63');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, 'Correct!');

    // Проверка сообщений для третьей итерации
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, 'Question: 2 22 42 62 82 .. 122 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, 'Your answer: 102');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(10, 'Correct!');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(11, `Congratulations, TestUser!`);
    expect(finish4).toBe(1);
  });

  test('should show error message and retry on wrong answer', () => {
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.1)   // progressionLastIndex = 5
      .mockReturnValueOnce(0.2)   // progressionStep = 20
      .mockReturnValueOnce(0.04)  // startIndex = 4
      .mockReturnValueOnce(0.3);  // current = 2 → прогрессия: 4 24 .. 64 84, пропущен 44

    readlineQuestionSpy
      .mockReturnValueOnce('44')
      .mockReturnValueOnce('99');

    fourthGame();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 4 24 .. 64 84 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: 44');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 4 24 .. 64 84 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: 99');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "'99' is wrong answer ;(. Correct answer was '44'.");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, `Let's try again, TestUser!`);
  });
});
