#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { getRandomNumber, isEven } from '../src/utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

playGame(description, generateRound);