#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';  // ← точка вместо запятой

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

playGame(description, generateRound);