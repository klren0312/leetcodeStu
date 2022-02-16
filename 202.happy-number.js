/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
let temp = {}
var isHappy = function(n) {
  if (n === 1) {
    temp = {}
    return true
  }
  if (temp[n]) {
    temp = {}
    return false
  }
  temp[n] = true
  const numArr = n.toString().split('')
  let total = 0
  numArr.forEach(v => {
    total += Math.pow(parseInt(v), 2)
  })
  if (total === 1) {
    temp = {}
    return true
  }  else {
    return isHappy(total)
  }
};
// @lc code=end

