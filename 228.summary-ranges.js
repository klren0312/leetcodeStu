/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) {
    return []
  }
  const range = []
  let start = ''
  let end = ''
  for (let i = 0, len = nums.length; i <= len; i++) {
    if (i === len) {
      range.push(start === end || end === '' ? start.toString() : `${start}->${end}`)
    }
    if (start === '') {
      start = nums[i]
    } else {
      if (nums[i] - nums[i - 1] > 1) {
        end = nums[i - 1]
        range.push(start === end ? start.toString() : `${start}->${end}`)
        start = nums[i]
        end = ''
      } else if (nums[i] - nums[i - 1] === 1) {
        end = nums[i]
      }
    }
  }
  return range
};
// @lc code=end

