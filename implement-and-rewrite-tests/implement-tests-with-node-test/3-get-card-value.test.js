import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("H♠"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});
test("Valid face card", function () {
  assert.equal(getCardValue("J♣"), 10);
});
test("Valid ace card", function () {
  assert.equal(getCardValue("A♠"), 11);
});

// TODO: What other invalid card cases can you think of?
