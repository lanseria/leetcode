/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const l1 = nums.length;
  let min = Number.MAX_VALUE;
  let res = Number.MAX_VALUE;
  let arr = [];
  for (let i = 0; i < l1; i++) {
    let a = nums[i];
    for (let j = i + 1; j < l1; j++) {
      let b = nums[j];
      for (let k = j + 1; k < l1; k++) {
        let c = nums[k];
        const sum = a + b + c;
        const cha = Math.abs(sum - target);
        if (min > cha) {
          min = cha;
          res = sum;
          arr = [a, b, c];
        }
      }
    }
  }
  return res;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
