/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head){
    return null
  }
  let dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let cur = head
  while (prev !== null && prev.next !== null) {
    if (cur.val === val) {
      prev.next = cur.next
      cur = prev.next
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return dummy.next
};
// @lc code=end

