export function getOrdinalNumber(num) {
  const numStr = num.toString();
  const numLength = numStr.length;
  const last2digits = numStr.slice(-2, -1);
  const last1digit = numStr.slice(-1);

  if (last1digit == "1" && last2digits != "1") {
    return `${numStr}st`;
  } else if (last1digit == "2" && last2digits != "1") {
    return `${numStr}nd`;
  } else if (last1digit == "3" && last2digits != "1") {
    return `${numStr}rd`;
  }
  return `${numStr}th`;
}
