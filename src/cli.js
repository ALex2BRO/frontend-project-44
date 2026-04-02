#!/usr/bin/env node
let userName = '';

import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`)
  userName += name;
};
export {userName};