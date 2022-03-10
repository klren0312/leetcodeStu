/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sLen = s.length
  const tLen = t.length
  if (s === t) {
    return true
  }
  if (sLen !== tLen) {
    return false
  }
  const sArr = s.split('')
  const tArr = t.split('')
  const tempObj = {}
  for (let i = 0, len = sLen; i < len; i++) {
    tempObj[sArr[i]] = tempObj[sArr[i]] || 0;
    tempObj[sArr[i]]++
  }

  for (let i = 0, len = tLen; i < len; i++) {
    if (!tempObj[tArr[i]]) {
      return false
    }
    tempObj[tArr[i]]--
  }
  return true
};
// isAnagram('anagram', 'nagaram')
// @lc code=end

