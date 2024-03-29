/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
  while(n >= 2) {
    if (n % 2 === 0) {
      n = n / 2
    } else if (n % 3 === 0) {
      n = n / 3
    } else if (n % 5 === 0) {
      n = n / 5
    } else {
      return false
    }
  }
  return n === 1

};
// @lc code=end

