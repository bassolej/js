'use strict'

/*
 * Create a function `isPositive` that takes a Number
 * and return if the given number is positive
 *
 * @next sign
 */
const isPositive = a => {
  if (a > 0) {
    return true
  }
  if (a < 0) {
    return false
  }
  if (a == 0) {
    return false
  }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof isPositive, 'function')
assert.strictEqual(isPositive.length, 1)
assert.strictEqual(isPositive(3), true)
assert.strictEqual(isPositive(1998790), true)
assert.strictEqual(isPositive(-1), false)
assert.strictEqual(isPositive(-0.7), false)
assert.strictEqual(isPositive(-787823), false)
assert.strictEqual(isPositive(0), false)

function newFunction() {}
// End of tests */
