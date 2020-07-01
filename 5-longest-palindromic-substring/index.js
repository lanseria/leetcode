const strings =
  "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeDemo = function (s) {
  // babad
  // tag : dp
  if (!s || s.length === 0) return "";
  let res = s[0];

  const dp = [];

  // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) dp[i][j] = true;
      // specail case 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true;
      // specail case 2
      else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        // state transition
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > res.length) {
        // update res
        res = s.slice(i, j + 1);
      }
    }
  }

  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s === "") {
    return "";
  }
  if (s.length === 1) {
    return s;
  }
  const lMap = new Map();
  let longestSize = 0;
  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = 1; j <= s.length - i; j++) {
      let e = s.substr(i, j);
      let l = e.length;
      // console.log(e, l, i, j);
      if (isPalindrome(e) && l > longestSize) {
        longestSize = l;
        lMap.set(e.length, e);
      }
    }
  }
  return lMap.get(longestSize);
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
  let a = s.split("");
  let b = a.reverse().join("");
  return b === s;
};
console.log(longestPalindrome(strings), 1);
console.log(longestPalindromeDemo(strings), 2);
