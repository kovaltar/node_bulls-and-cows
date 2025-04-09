'use strict';
import readline from 'node:readline';
import { generateRandomNumber } from './modules/generateRandomNumber';
import { getBullsAndCows } from './modules/getBullsAndCows';
import { checkIsValidUserInput } from './modules/checkIsValidUserInput';

const randNum = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number? ', (inputNum) => {
  if (checkIsValidUserInput(inputNum)) {
    getBullsAndCows(inputNum, randNum);
  }

  rl.close();
});
