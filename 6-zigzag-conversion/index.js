/**
 *
 * @param {array} arr
 * @param {number} n
 */
function chunk(arr, chunkNum, numRows) {
  const newArr = [];
  const time = Math.ceil(arr.length / chunkNum);
  // console.log(arr.length, n, count, time);
  for (let i = 0; i < time; i++) {
    const narr = [];
    const a = i * chunkNum,
      b = chunkNum * (i + 1);
    // console.log(a, b);
    const aarr = arr.slice(a, b);
    for (let j = 0; j < numRows; j++) {
      if (j === 0 || j === numRows - 1) {
        narr.push([aarr[j]]);
      } else {
        narr.push([aarr[j], aarr[chunkNum - j]]);
      }
    }
    newArr.push(narr);
  }
  return newArr;
}
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const chunkNum = (numRows - 1) * 2;
  const sa = s.split("");
  const narr = chunk(sa, chunkNum, numRows);
  const b = [];
  for (let i = 0; i < numRows; i++) {
    const a = [];
    for (let j = 0; j < narr.length; j++) {
      const el = narr[j][i];
      // console.log(el);
      a.push(...el);
    }
    // console.log(a, i);
    b.push(...a);
  }
  const str = b.join("");
  return str;
};
const s = "AB";
const numRows = 1;
// convert(s, numRows);
console.log(convert(s, numRows));
