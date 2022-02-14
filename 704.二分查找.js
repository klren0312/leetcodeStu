/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }
  let lowIndex = 0
  let highIndex = nums.length - 1
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2)
    if (target < nums[midIndex]) {
      highIndex = midIndex - 1
    } else if (target > nums[midIndex]) {
      lowIndex = midIndex + 1
    } else {
      return midIndex
    }
  }
  return -1
};
// @lc code=end

