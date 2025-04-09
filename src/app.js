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

let playing = true;

while (playing) {
  rl.question('Enter a number? ', (inputNum) => {
    if (checkIsValidUserInput(inputNum)) {
      const result = getBullsAndCows(inputNum, randNum);

      console.log(result);

      if (result?.bulls === 4) {
        playing = false;
        rl.close();
      }
    }
  });
}
