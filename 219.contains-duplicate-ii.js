/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0, len = nums.length; i<len; i++) {
    for (let j = 1; j < len; j++) {
      if (nums[i] === nums[j] && i !== j && Math.abs(i - j) <= k) {
        return true
      }
    }
  }
  return false
};
// @lc code=end

