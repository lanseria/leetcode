/**
 * @param {number} x
 * @return {number}
 */
const realReverse = (x) => {
  let myx = x;
  let sum = 0;
  const n = Math.floor(Math.log10(myx) + 1) - 1;
  for (let i = 0; i < n + 1; i++) {
    const count = n - i;
    const time = 10 ** count;
    const needTime = 10 ** i;
    const j = Math.floor(myx / time);
    myx -= j * time;
    const addNum = j * needTime;
    // console.log(j, addNum);
    sum += addNum;
    // console.log(sum);
  }
  // console.log(sum);
  if (sum > 2 ** 31 - 1 || sum < (-2) ** 31) {
    return 0;
  }
  return sum;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  } else if (x > 0) {
    return realReverse(x);
  } else {
    return -realReverse(-x);
  }
};
const N = 1534236469;
// reverse(N);
// console.log(1534236469 > 2 ** 31 - 1);
// console.log(reverse(N));
