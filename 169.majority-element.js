/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1
  let cache = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] === nums[cache]) {
      count++
    } else {
      count--
    }
    if (count === 0) {
      cache = i
      count = 1
    }
  }
  return nums[cache]
};
// @lc code=end

