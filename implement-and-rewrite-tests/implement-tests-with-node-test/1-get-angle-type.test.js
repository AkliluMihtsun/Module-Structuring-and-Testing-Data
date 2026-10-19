import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
test("Classifies acute angles", () =>
  assert.equal(getAngleType(89), "Acute angle"));
test("Classifies obtuse angle", () =>
  assert.equal(getAngleType(130), "Obtuse angle"));
test("Classifies straight angle", () =>
  assert.equal(getAngleType(180), "Straight angle"));
test("Classifies reflex angle", () =>
  assert.equal(getAngleType(240), "Reflex angle"));
test("Classifies invalid angle range", () => {
  assert.equal(getAngleType(450), "Invalid angle");
  assert.equal(getAngleType(0), "Invalid angle");
  assert.equal(getAngleType(360), "Invalid angle");
  assert.equal(getAngleType(-120), "Invalid angle");
});
