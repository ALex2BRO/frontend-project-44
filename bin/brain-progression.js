#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);
  
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return [question, correctAnswer];
};

playGame(description, generateRound);