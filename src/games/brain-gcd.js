#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  return [question, correctAnswer];
};

playGame(description, generateRound);