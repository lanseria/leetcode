/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    for (let i = 0; i < height.length; i++) {
        const eli = height[i];
        for (let j = i; j < height.length; j++) {
            const elj = height[j];
            const min = Math.min(eli, elj)
            const m = min * (j - i)
            if (m > max) {
                max = m
            }
        }
    }
    return max
};

const N = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(N));