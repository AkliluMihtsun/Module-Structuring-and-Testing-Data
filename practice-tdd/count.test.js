// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.

test("should return 0 for no occurrences of a specific character in the string ", () => {
  const str = "aaaaa";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 if case of a specific character is not the same as in the string", () => {
  const str = "AAAAA";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 if the string contains empty char and vice versa", () => {
  let str = "AAAAA";
  let char = "";
  let count = countChar(str, char);
  expect(count).toEqual(0);
  str = "";
  char = "c";
  count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should count multiple occurrences of a non-english character", () => {
  const str = "AAA%&&&0";
  const char = "%";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should count occurrences multiple characters in a string sequentially", () => {
  let str = "AbCdEfGh";
  let char = "Ab";
  let count = countChar(str, char);
  expect(count).toEqual(1);

  str = "AbCdEfGh";
  char = "AC";
  count = countChar(str, char);
  expect(count).toEqual(0);
});
