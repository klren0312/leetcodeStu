/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (45.99%)
 * Total Accepted:    15.5K
 * Total Submissions: 33.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let la = a.length
  let lb = b.length
  let aArr = a.split('')
  let bArr = b.split('')
  if(la > lb) {
    for(let i = 0; i < la - lb; i++) {
      bArr.unshift(0)
    }
  } 
  else if(la < lb){
    for(let i = 0; i < lb - la; i++) {
      aArr.unshift(0)
    }
  }
  let c = 0 // 进 1 位
  let res = []
  for(let i = Math.max(la, lb) - 1; i >= 0; i--) {
    if (Number(aArr[i]) + Number(bArr[i]) === 2) {
      res[i] = 0 + c
      c = 1
    }
    else if(Number(aArr[i]) + Number(bArr[i]) === 1) {
      if (c === 1) {
        res[i] = 0
        c = 1
      } else {
        res[i] = 1
      }
    }
    else if (Number(aArr[i]) + Number(bArr[i]) === 0){
      res[i] = Number(aArr[i]) + Number(bArr[i]) + c
      c = 0
    }
  }
  if(c === 1) {
    res.unshift(1)
  }
  return res.join('')
};
