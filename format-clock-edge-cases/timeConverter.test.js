import { formatAs12HourClock } from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function () {
  assert.equal(formatAs12HourClock("14:00"), "02:00 pm");
});

test("can correctly convert morning time", function () {
  assert.equal(formatAs12HourClock("08:00"), "08:00 am");
});

test("can correctly convert midnight time", function () {
  assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("can correctly convert midday time", function () {
  assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
});

test("can respond to the invalid MM input", function () {
  assert.equal(
    formatAs12HourClock("22:60"),
    "Please check your MM input must be less than 60"
  );
});

test("can respond to the invalid HH input", function () {
  assert.equal(
    formatAs12HourClock("24:00"),
    "Please check your HH input must be less than 24"
  );
});

test("can respond to the invalid format input", function () {
  assert.equal(
    formatAs12HourClock("2400"),
    "Please check your format input must be 'HH:MM'"
  );
});
