import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return Invalid when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual("Invalid");
});
test(`should return false when (nominator >= denominator)`, () => {
  expect(isProperFraction(4, 1)).toEqual(false);
  expect(isProperFraction(3, 3)).toEqual(false);
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(-4, 1)).toEqual(false);
});
test(`should return true when (nominator < denominator)`, () => {
  expect(isProperFraction(3, 5)).toEqual(true);
  expect(isProperFraction(3, -5)).toEqual(true);
  expect(isProperFraction(-2, 7)).toEqual(true);
});
