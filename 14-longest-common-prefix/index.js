/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let minLength = strs[0].length;
  let minStr = strs[0];
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];
    if (minLength > element.length) {
      minLength = element.length;
      minStr = element;
    }
  }
  if (minLength === 0) {
    return "";
  }
  let commonPrefix = "";
  for (let i = minLength; i >= 1; i--) {
    const sliceStr = minStr.substr(0, i);
    const boolArr = strs.map((m) => {
      return m.startsWith(sliceStr);
    });
    if (boolArr.every((m) => m)) {
      commonPrefix = sliceStr;
      break;
    }
  }
  return commonPrefix;
};
const N = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(N));
