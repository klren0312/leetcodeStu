/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  const sLen = s.length
  const tLen = t.length
  if (sLen === 0) {
    return true
  }
  let i = 0
  let j = 0
  while (i < sLen && j < tLen) {
    if (s[i] === t[j]) {
      i++
    }
    j++
  }
  return i === sLen
};
// @lc code=end
