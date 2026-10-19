import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, -2), true);
  assert.equal(isProperFraction(-3, 5), true);
  assert.equal(isProperFraction(0.5, 0.7), true);
});
test("Basic improper fraction", () => {
  assert.equal(isProperFraction(5, 3), false);
  assert.equal(isProperFraction(7, -3), false);
  assert.equal(isProperFraction(-8, 6), false);
});
test("When numerator and denominator are equal", function () {
  assert.equal(isProperFraction(7, 7), false);
  assert.equal(isProperFraction(-2, -2), false);
});
test("when denominator is zero", () => {
  assert.equal(isProperFraction(5, 0), "Invalid");
});
