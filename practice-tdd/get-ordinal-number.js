export function getOrdinalNumber(num) {
  const numStr = num.toString();
  const last2ndDigit = numStr.slice(-2, -1);
  const last1stDigit = numStr.slice(-1);

  if (last1stDigit == "1" && last2ndDigit != "1") {
    return `${numStr}st`;
  } else if (last1stDigit == "2" && last2ndDigit != "1") {
    return `${numStr}nd`;
  } else if (last1stDigit == "3" && last2ndDigit != "1") {
    return `${numStr}rd`;
  }
  return `${numStr}th`;
}
