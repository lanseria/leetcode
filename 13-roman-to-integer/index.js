const NA = [
  "1",
  "4",
  "5",
  "9",
  "10",
  "40",
  "50",
  "90",
  "100",
  "400",
  "500",
  "900",
  "1000",
];
const RA = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let idx = RA.length - 1;
  let sum = 0;
  do {
    const RCHAR = RA[idx];
    if (s.startsWith(RCHAR)) {
      sum += +NA[idx];
      s = s.replace(new RegExp(`^${RCHAR}`), "");
    } else {
      idx--;
    }
  } while (idx >= 0);
  // console.log(sum);
  return sum;
};
/**
 * IV 4
 * IX 9
 * LVIII 58
 * MCMXCIV 1994
 */
const R = "MCMXCIV";
console.log(romanToInt(R));
