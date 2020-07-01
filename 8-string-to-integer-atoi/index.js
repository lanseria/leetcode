/**
 * @param {array} strSplitArr
 * @param {boolean} isPositive
 * @return {number}
 */
const INT_MIN = -(2 ** 31);
const INT_MAX = 2 ** 31 - 1;
const strToNumber = (strSplitArr, isPositive) => {
  const newStrSplitArr = [];
  let isShowDot = false;
  for (let i = 0; i < strSplitArr.length; i++) {
    const el = strSplitArr[i];
    if (Number.isNaN(+el) || el === " ") {
      if (el === "." && !isShowDot) {
        newStrSplitArr.push(el);
        isShowDot = true;
      } else {
        break;
      }
    } else {
      newStrSplitArr.push(el);
    }
  }
  strSplitArr.forEach((m) => {});
  const newNumberJoin = newStrSplitArr.join("");
  // console.log(newNumberJoin);
  if (isPositive) {
    const number = +newNumberJoin;
    if (number > INT_MAX) {
      return INT_MAX;
    } else {
      return number;
    }
  } else {
    const number = -newNumberJoin;
    if (number < INT_MIN) {
      return INT_MIN;
    } else {
      return number;
    }
  }
};
/**
 * @param {array} s
 * @return {boolean}
 */
const judgeStrRetrunZero = (s) => {
  if (Number.isNaN(+s[0])) {
    return true;
  } else {
    return false;
  }
};
/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function (str) {
  const strTrim = str.trim();
  const strSplitArr = strTrim.split("");
  if (strSplitArr[0] === "+" || strSplitArr[0] === "-") {
    const first = strSplitArr[0];
    const nextArr = strSplitArr.slice(1, strSplitArr.length);
    if (judgeStrRetrunZero(nextArr)) return 0;
    if (first === "+") {
      return strToNumber(nextArr, true);
    } else {
      return strToNumber(nextArr, false);
    }
  } else if (judgeStrRetrunZero(strSplitArr)) {
    return 0;
  } else {
    return strToNumber(strSplitArr, true);
  }
};
const N = "   +0 123";
console.log(myAtoi(N));
