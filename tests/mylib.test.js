/**
 * Unit tests for the mylib module.
 *
 * Written with Mocha as the test runner and the Chai `expect` style for
 * assertions. The suite covers one happy path per function, the division by
 * zero error, and the input validation shared by all four functions.
 *
 * Run with: npm test
 */

import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mylib.js';

/** Collects a line per finished test so the after() hook can report a count. */
const executed = [];

/**
 * Root level setup. Mocha runs this once, before any test in this file.
 * A real project would open a database connection or start a server here.
 */
before(function () {
  console.log('\n[before] Starting the mylib test suite');
  global.suiteStartedAt = Date.now();
});

/**
 * Root level teardown. Mocha runs this once, after every test has finished,
 * whether the tests passed or failed. A real project would close connections
 * or delete temporary files here.
 */
after(function () {
  const elapsed = Date.now() - global.suiteStartedAt;
  console.log(`[after] Finished ${executed.length} tests in ${elapsed} ms`);
  delete global.suiteStartedAt;
});

/** Runs after each individual test and records which test just ran. */
afterEach(function () {
  executed.push(this.currentTest.title);
});

describe('mylib', function () {
  describe('add()', function () {
    it('adds two positive numbers', function () {
      expect(add(2, 3)).to.equal(5);
    });

    it('handles negative numbers', function () {
      expect(add(-4, 1)).to.equal(-3);
    });

    it('handles decimals within floating point tolerance', function () {
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-9);
    });
  });

  describe('subtract()', function () {
    it('subtracts the second operand from the first', function () {
      expect(subtract(9, 4)).to.equal(5);
    });

    it('returns a negative result when the subtrahend is larger', function () {
      expect(subtract(4, 9)).to.equal(-5);
    });
  });

  describe('multiply()', function () {
    it('multiplies two numbers', function () {
      expect(multiply(6, 7)).to.equal(42);
    });

    it('returns zero when one factor is zero', function () {
      expect(multiply(6, 0)).to.equal(0);
    });
  });

  describe('divide()', function () {
    it('divides two numbers', function () {
      expect(divide(10, 4)).to.equal(2.5);
    });

    // The ZeroDivision requirement: the divisor 0 must raise an error
    // instead of returning Infinity.
    it('throws a RangeError when the divisor is zero', function () {
      expect(() => divide(10, 0)).to.throw(RangeError, 'Division by zero is not allowed');
    });

    it('throws for 0 / 0 as well, rather than returning NaN', function () {
      expect(() => divide(0, 0)).to.throw(RangeError);
    });
  });

  describe('input validation', function () {
    it('rejects a string argument', function () {
      expect(() => add('2', 3)).to.throw(TypeError);
    });

    it('rejects undefined and null arguments', function () {
      expect(() => subtract(undefined, 3)).to.throw(TypeError);
      expect(() => multiply(3, null)).to.throw(TypeError);
    });

    it('rejects NaN and Infinity', function () {
      expect(() => add(NaN, 1)).to.throw(TypeError);
      expect(() => divide(Infinity, 2)).to.throw(TypeError);
    });
  });
});
