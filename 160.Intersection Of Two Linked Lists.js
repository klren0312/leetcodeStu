/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLen(headA)
    let lenB = getLen(headB)
    if (lenA === 0 || lenB === 0) {
      return null
    }

    if (lenA > lenB) {
      headA = headA.next
      lenA--
    }

    if (lenB > lenA) {
      headB = headB.next
      lenB--
    }

    while(lenA && lenB) {
      if (headA === headB) {
        return headA
      }

      headA = headA.next
      headB = headB.next
    }
    return null
};
function getLen(node) {
  let len = 0
  while(node) {
    node = node.next
    len++
  }
  return len
}
// @lc code=end

