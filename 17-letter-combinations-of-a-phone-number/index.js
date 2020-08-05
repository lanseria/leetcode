const digitsMap = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};
/**
 * 回溯函数 backtrack
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const resArr = [];
  const loop = (char, next_digit) => {
    if (next_digit.length === 0) {
      resArr.push(char);
    } else {
      for (let i = 0; i < digitsMap[next_digit[0]].length; i++) {
        const c = digitsMap[next_digit[0]][i];
        loop(char + c, next_digit.substr(1));
      }
    }
  };
  if (digits) {
    loop("", digits);
  }
  return resArr;
};

console.log(letterCombinations("234"));
