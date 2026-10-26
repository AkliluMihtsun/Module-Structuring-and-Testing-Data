export function countChar(stringOfCharacters, findCharacter) {
  if (findCharacter === "") {
    return 0;
  }
  return stringOfCharacters.split(findCharacter).length - 1;
}
