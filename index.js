/**
 * @fileOverview Contains logic of Deaf Grandma
 */

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

let count = 0;
const string = 'NO, NOT SINCE ';
print('What do you want to say to Grandma!!');

while (count < 3) {
  const inputString = prompt();

  if (inputString === 'BYE') {
    print(string.concat(getRandomValue(1930, 1950)));
    count += 1;
    if (count === 2) {
      break;
    }
  } else if (isUppercase(inputString)) {
    print(string.concat(getRandomValue(1930, 1950)));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
