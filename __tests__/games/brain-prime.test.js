import readlineSync from 'readline-sync';
import { userName } from '../../src/cli.js';
import { fifthGame } from '../../src/games/brain-prime';

jest.mock('readline-sync', () => ({
  question: jest.fn(),
}));

jest.mock('../../src/cli.js', () => ({
  userName: 'TestUser',
}));

describe('Brain Prime Game (fifthGame)', () => {
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
      .mockReturnValueOnce(0.01)  // number = 2 (простое) → 'yes'
      .mockReturnValueOnce(0.02)  // number = 3 (простое) → 'yes'
      .mockReturnValueOnce(0.99); // number = 100 (не простое) → 'no'

    readlineQuestionSpy
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no');

    fifthGame();

    expect(consoleLogSpy).toHaveBeenCalledWith('Answer "yes" if given number is prime. Otherwise answer "no".');
    // Вопрос → ответ → результат
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 2 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: yes');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 3 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: yes');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, 'Correct!');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, 'Question: 100 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, 'Your answer: no');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(10, 'Correct!');


    expect(consoleLogSpy).toHaveBeenNthCalledWith(11, `Congratulations, TestUser!`);
  });

  test('should show error message and retry on wrong answer', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.06); // number = 7 (простое)

    readlineQuestionSpy
      .mockReturnValueOnce('yes')
      .mockReturnValueOnce('no');

    fifthGame();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Question: 7 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Your answer: yes');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 'Correct!');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, 'Question: 7 ');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, 'Your answer: no');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "'no' is wrong answer ;(. Correct answer was 'yes'.");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, "Let's try again, TestUser!");
  });
});
