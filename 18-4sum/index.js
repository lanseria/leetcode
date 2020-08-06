const _ = require("lodash");
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  const targetArr = [];
  const loop = (sum, nextNums, currentArr) => {
    if (currentArr.length === 4 && sum === target) {
      //   console.log(sum, currentArr);
      const res = targetArr.some((m) => _.isEqual(m.sort(), currentArr.sort()));
      if (!res) targetArr.push(currentArr);
      return;
    }
    for (let i = 0; i < nextNums.length; i++) {
      const arr = [...currentArr];
      const anum = nextNums[i];
      arr.push(anum);
      const newArr = nextNums.slice(i + 1, nextNums.length);
      loop(anum + sum, newArr, arr);
    }
  };
  loop(0, nums, []);
  return targetArr;
};

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
