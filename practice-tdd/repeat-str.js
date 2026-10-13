export function repeatStr(word, n) {
  // Your implementation of this function must *not* call String.prototype.repeat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).
  // The goal is to re-implement that function, not to use it.
  let nWords = "";
  for (let i = 0; i < n; i++) {
    nWords = nWords + word;
  }
  return nWords;
}
