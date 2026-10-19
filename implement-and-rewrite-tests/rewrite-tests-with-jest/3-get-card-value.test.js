import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
// Case 2: number cards (2-10)
test(`Should return the digit when given number card`, () => {
  expect(getCardValue("10♠")).toEqual(10);
  expect(getCardValue("6♠")).toEqual(6);
  expect(getCardValue("2♠")).toEqual(2);
});
// Case 3: face cards
test(`Should return 10 when given face card`, () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♠")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});
// Case 4: invalid cards
test(`Should return invalid when given invalid card`, () => {
  expect(() => {
    getCardValue("L♣").toThrow("invalid");
  });
  expect(() => {
    getCardValue("A*").toThrow("invalid");
  });
  expect(() => {
    getCardValue("12♣").toThrow("invalid");
  });
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
