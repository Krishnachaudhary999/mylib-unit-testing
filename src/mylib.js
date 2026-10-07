/**
 * mylib - a small arithmetic library.
 *
 * Exposes the four basic arithmetic operations. Every function validates its
 * input and throws an error instead of returning NaN or Infinity, so that
 * calling code fails loudly rather than silently spreading bad values.
 *
 * @module mylib
 */

/**
 * Check that every argument is a usable, finite number.
 *
 * Rejects strings, null, undefined, objects, NaN and Infinity. This keeps the
 * public functions free of repeated type checks.
 *
 * @param {...*} values - The values to validate.
 * @throws {TypeError} If any value is not a finite number.
 * @returns {void}
 */
function assertFiniteNumbers(...values) {
  for (const value of values) {
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError(
        `Expected a finite number but received: ${String(value)}`);
    }
  }
}

/**
 * Add two numbers.
 *
 * @param {number} a - First operand.
 * @param {number} b - Second operand.
 * @returns {number} The sum of a and b.
 * @throws {TypeError} If either operand is not a finite number.
 */
export function add(a, b) {
  assertFiniteNumbers(a, b);
  return a + b;
}

/**
 * Subtract the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference a - b.
 * @throws {TypeError} If either operand is not a finite number.
 */
export function subtract(a, b) {
  assertFiniteNumbers(a, b);
  return a - b;
}

/**
 * Multiply two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 * @throws {TypeError} If either operand is not a finite number.
 */
export function multiply(a, b) {
  assertFiniteNumbers(a, b);
  return a * b;
}

/**
 * Divide the first number by the second.
 *
 * JavaScript returns Infinity for `1 / 0` and NaN for `0 / 0` instead of
 * raising an error. This function makes division by zero an explicit failure,
 * which is the behaviour the unit tests assert.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {number} The quotient a / b.
 * @throws {TypeError} If either operand is not a finite number.
 * @throws {RangeError} If the divisor is zero.
 */
export function divide(a, b) {
  assertFiniteNumbers(a, b);
  if (b === 0) {
    throw new RangeError('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Default export, so the library can also be used as a single object:
 * `import mylib from './mylib.js'; mylib.add(1, 2);`
 */
export default { add, subtract, multiply, divide };
