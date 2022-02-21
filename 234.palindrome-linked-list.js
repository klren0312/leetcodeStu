/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (head.next === null) {
    return true
  }
  const tempArr = []
  while(head) {
    tempArr.push(head.val)
    head = head.next
  }
  const len = tempArr.length
  if (len % 2 !== 0) {
    const middle = Math.floor(len / 2)
    tempArr.splice(middle, 1)
  }
  let i = 0
  let j = tempArr.length - 1
  while(j >= tempArr.length / 2) {
    if (tempArr[i] !== tempArr[j]) {
      return false
    }
    i++
    j--
  }
  return true
};
// @lc code=end

