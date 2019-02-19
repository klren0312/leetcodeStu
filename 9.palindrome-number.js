/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (55.92%)
 * Total Accepted:    66.9K
 * Total Submissions: 119.7K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 * 
 * 输入: 121
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 
 * 示例 3:
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 * 
 * 
 * 进阶:
 * 
 * 你能不将整数转为字符串来解决这个问题吗？
 * 
 */
/**
 * 通过字符串判断
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//   let str = x + ''
//   let arr = str.split('')
//   let reArr = arr.reverse()
//   if(arr.indexOf('-') > -1) {
//     return false
//   } else {
//     let reNum = parseInt(reArr.join(''))
//     if(x - reNum === 0) {
//       return true
//     } else {
//       return false
//     }
//   }
// };

/**
 * 不通过字符串判断
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr = []
  let num = x
  if(x < 0) {
    return false
  }
  if(x === 0) {
    return true
  }
  while(x!==0) {
    arr.push(x % 10)
    x = (x - x % 10) / 10
  }
  if(num - parseInt(arr.join('')) === 0) {
    return true
  } else {
    return false
  }
};
