/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num === 0) {
    return 0
  }
  let numStr = num.toString()
  if (numStr.length === 1) {
    return num
  } else {
    while(numStr.length !== 1) {
      const sum = numStr.split('').reduce((a, b) =>{
        return a + parseInt(b)
      }, 0)
      numStr = sum.toString()
    }
    return parseInt(numStr)
  }
};
// @lc code=end

