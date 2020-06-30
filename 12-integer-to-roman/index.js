/**
 * 
 * @param {number} num 被除数
 * @param {number} CHU 除数
 */
const getYCH = (num, CHU) => {
    const CH = Math.floor(num / CHU)
    const Y = num % CHU
    return [CH, Y]
}
/**
 * 重复某个字符
 * @param {string} src 字符
 * @param {number} n 字数
 */
function repeat(src, n) {
    return (new Array(n + 1)).join(src);
}
/**
 * 1-3999
 * @param {number} num
 * @return {string}
 * 字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/integer-to-roman
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var intToRoman = function (num) {
    const numA = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"].reverse()
    const romanA = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"].reverse()
    let CH = 0
    let Y = num
    let romanArr = []
    for (let i = 0; i < numA.length; i++) {
        const key = numA[i];
        const value = romanA[i]
        const k = +key;
        [CH, Y] = getYCH(Y, k)
        const CHSTR = repeat(value, CH)
        romanArr.push(CHSTR)
    }
    const res = romanArr.join('')
    return res
};
const N = 1994
console.log(intToRoman(N));