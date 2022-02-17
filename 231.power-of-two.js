/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 1) {
    return true
  }
  let i = 0
  while (Math.pow(2, i) <= n) {
    if (Math.pow(2, i) === n) {
      return true
    }
    i++
  }
  return false
};
// @lc code=end

