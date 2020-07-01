/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n = [...nums1, ...nums2];
  n = n.sort((a, b) => a - b);
  // console.log(n);
  if (n.length % 2 === 0) {
    // console.log("yes");
    return [(n[n.length / 2 - 1] + n[n.length / 2]) / 2];
  } else {
    // console.log("no");
    return [n[(n.length + 1) / 2 - 1]];
  }
};

console.log(findMedianSortedArrays([3], [-2, -1]));
