import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import getRandomInt from '../utils.js';

let finish1 = 0;

export const firstGame = () => {
  let correctAnswersCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const number = getRandomInt(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  finish1 = 1;
};

export { finish1 };