import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import getRandomInt from '../utils.js';

let finish5 = 0;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const fifthGame = () => {
  let correctAnswersCount = 0;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (correctAnswersCount < 3) {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

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
  finish5 = 1;
};

export { finish5 };