/**
 * main.js - demonstration program for the mylib module.
 *
 * Imports mylib and calls every exported function, including a deliberate
 * division by zero so that the error handling is visible when the program is
 * run. This file is never loaded by the test suite, so the tests can be run
 * on their own with `npm test`.
 *
 * Run with: node src/main.js
 */

import { add, subtract, multiply, divide } from './mylib.js';

/**
 * Print one labelled result to the console.
 *
 * @param {string} label - Human readable description of the operation.
 * @param {number} value - The computed result.
 * @returns {void}
 */
function report(label, value) {
  console.log(`${label} = ${value}`);
}

/**
 * Run the demonstration.
 *
 * @returns {void}
 */
function main() {
  console.log('mylib demonstration');
  console.log('-------------------');

  report('add(7, 5)', add(7, 5));
  report('subtract(7, 5)', subtract(7, 5));
  report('multiply(7, 5)', multiply(7, 5));
  report('divide(7, 5)', divide(7, 5));

  console.log('\nError handling');
  console.log('--------------');

  // Division by zero: caught here so the program finishes normally.
  try {
    divide(7, 0);
  } catch (error) {
    console.log(`divide(7, 0) threw ${error.name}: ${error.message}`);
  }

  // Invalid input type: also rejected by the library.
  try {
    add('7', 5);
  } catch (error) {
    console.log(`add('7', 5) threw ${error.name}: ${error.message}`);
  }

  console.log('\nDone.');
}

main();
