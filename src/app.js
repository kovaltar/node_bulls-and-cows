/* eslint-disable no-console */
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

while (true) {
  let result;

  rl.question('Enter a number? ', (inputNum) => {
    if (checkIsValidUserInput(inputNum)) {
      result = getBullsAndCows(inputNum, randNum);

      console.log(result);
    }
  });

  if (result?.bulls === 4) {
    rl.close();
    break;
  }
}
