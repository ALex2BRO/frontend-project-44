#!/usr/bin/env node

import { playGame } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
  }
  
  return [question, String(correctAnswer)];
};

playGame(description, generateRound);