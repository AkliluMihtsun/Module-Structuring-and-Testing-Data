export function getOrdinalNumber(num) {
  const numStr = num.toString();
  const numLength = numStr.length;
  const pattern1 = /^(11|12|13)$/;
  const pattern2 = /^0$/;
  const pattern3 = /^(4|5|6|7|8|9)$/;
  const last2digits = numStr.slice(-2);
  const last1digit = numStr.slice(-1);

  if (numStr[numLength - 1] == "1" && numStr[numLength - 2] != "1") {
    return `${numStr}st`;
  } else if (numStr[numLength - 1] == "2" && numStr[numLength - 2] != "1") {
    return `${numStr}nd`;
  } else if (numStr[numLength - 1] == "3" && numStr[numLength - 2] != "1") {
    return `${numStr}rd`;
  }
  return `${numStr}th`;
}
