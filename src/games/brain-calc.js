import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import getRandomInt from '../utils.js';

let finish2 = 0;

export const secondGame = () => {
  let correctAnswersCount = 0;
  console.log('What is the result of the expression?');

  while (correctAnswersCount < 3) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomInt(0, operators.length - 1)];
    const question = `${a} ${operator} ${b}`;

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = a + b;
        break;
      case '-':
        correctAnswer = a - b;
        break;
      case '*':
        correctAnswer = a * b;
        break;
      default:
        correctAnswer = null;
    }

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    console.log(`Your answer: ${userAnswer}`);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  finish2 = 1;
};

export { finish2 };