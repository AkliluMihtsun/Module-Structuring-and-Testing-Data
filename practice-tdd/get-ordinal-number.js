export function getOrdinalNumber(num) {
  const numStr = num.toString();
  const numLength = numStr.length;
  if (numStr[numLength - 1] == "1" && numStr[numLength - 2] != "1") {
    return `${numStr}st`;
  } else if (numStr[numLength - 1] == "2" && numStr[numLength - 2] != "1") {
    return `${numStr}nd`;
  } else if (numStr[numLength - 1] == "3" && numStr[numLength - 2] != "1") {
    return `${numStr}rd`;
  }

  //return "1st";
}
