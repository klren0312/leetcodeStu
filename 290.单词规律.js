/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const sArr = s.split(' ')
  if (pattern.length !== sArr.length) return false
  let temp = []
  let no = 0
  let map = new Map()
  sArr.forEach(v => {
    if (map.has(v)) {
      temp.push(map.get(v))
    } else {
      ++no
      map.set(v, no)
      temp.push(no)
    }
  })
  let temp2 = []
  let no2 = 0
  let map2 = new Map()
  pattern.split('').forEach(v => {
    if (map2.has(v)) {
      temp2.push(map2.get(v))
    } else {
      ++no2
      map2.set(v, no2)
      temp2.push(no2)
    }
  })
  if (temp.join('') === temp2.join('')) return true
  return false
};

// @lc code=end

