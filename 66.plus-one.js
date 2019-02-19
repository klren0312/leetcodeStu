/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (37.20%)
 * Total Accepted:    35.2K
 * Total Submissions: 94.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let e = 0 // 是否进 1 标志
  let first = digits[0] // 存下第一个数
  if(digits[digits.length - 1] === 9) { // 最后一位为 9, 进 1
    digits[digits.length - 1] = 0
    e = 1
  } else { // 反之只是加 1
    digits[digits.length - 1] += 1
  }
  if(e === 1) { // 对于进 1 的循环处理
    for(let i = digits.length-2;i >= 0;i--) {
      if(e===1) {
        if(digits[i] === 9 ) {
          digits[i] = 0
          e = 1
        } else {
          digits[i] += 1
          e = 0
          break
        }     
      } else {
        break
      }
    }
  }
  if(digits[0] === 0 && first !== 0) { // 若原来第一个数不是0, 则前面加个1
    digits.unshift(1)
  }
  return digits
};
