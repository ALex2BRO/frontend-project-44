import readlineSync from 'readline-sync';
import { userName } from '../cli.js';
import getRandomInt from '../utils.js';

let finish4 = 0;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const fourthGame = () => {
  let correctAnswersCount = 0;
  console.log('What number is missing in the progression?');

  while (correctAnswersCount < 3) {
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);
    const length = getRandomInt(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomInt(0, length - 1);
    const correctAnswer = progression[hiddenIndex].toString();
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

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
  finish4 = 1;
};

export { finish4 };