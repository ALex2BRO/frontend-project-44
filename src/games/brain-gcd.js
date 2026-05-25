import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import getRandomInt from '../utils.js';

let finish3 = 0;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const thirdGame = () => {
  let correctAnswersCount = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswersCount < 3) {
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);
    const question = `${a} ${b}`;
    const correctAnswer = gcd(a, b).toString();

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
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
  finish3 = 1;
};

export { finish3 };