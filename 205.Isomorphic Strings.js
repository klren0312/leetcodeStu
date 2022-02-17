/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const len = s.length
  if (len === 1 && s === t) {
    return true
  }
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < len; i++) {
    obj1[s[i]] = t[i]
    obj2[t[i]] = s[i]
  }

  let result1 = ''
  let result2 = ''
  for (let i = 0; i < len; i++) {
    result1 += obj1[s[i]]
    result2 += obj2[t[i]]
  }

  return result1 === t && result2 === s
};

// @lc code=end
