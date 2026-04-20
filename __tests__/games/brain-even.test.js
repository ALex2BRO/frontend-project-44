import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { firstGame, finish1 } from '../../src/games/brain-even.js';

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}));

jest.mock('../../src/cli.js', () => ({
  userName: 'TestUser',
}));

describe('Brain Even Game (firstGame)', () => {
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
    // Замокаем Math.random для предсказуемых значений:
    // 4 (чётное), 6 (чётное), 8 (чётное)
    jest.spyOn(Math, 'random')
      .mockReturnValueOnce(0.04) // 4
      .mockReturnValueOnce(0.06) // 6
      .mockReturnValueOnce(0.08); // 8

    // Настраиваем ответы пользователя — все правильные
    readlineQuestionSpy
      .mockReturnValueOnce('yes') // для 4
      .mockReturnValueOnce('yes') // для 6
      .mockReturnValueOnce('yes'); // для 8

    firstGame();

    // Проверяем ключевые сообщения
    expect(consoleLogSpy).toHaveBeenCalledWith('Answer "yes" if the number is even, otherwise answer "no".');
    expect(consoleLogSpy).toHaveBeenCalledWith('Correct!');
    expect(consoleLogSpy).toHaveBeenCalledWith(`Congratulations, TestUser!`);
    expect(finish1).toBe(1);
  });

  test('should show error message and retry on wrong answer', () => {
    // Замокаем Math.random: 4 (чётное)
    jest.spyOn(Math, 'random').mockReturnValue(0.04); // 4

    // Первый ответ правильный, второй — неправильный
    readlineQuestionSpy
      .mockReturnValueOnce('yes') // правильно для 4
      .mockReturnValueOnce('no');  // неправильно для следующего числа


    firstGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('Correct!');
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "'no' is wrong answer ;(. Correct answer was 'yes'."
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("Let's try again, TestUser!");
  });
});