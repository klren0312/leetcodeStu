/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (43.38%)
 * Total Accepted:    15.8K
 * Total Submissions: 36.4K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var deleteDuplicates = function(head) {
//   let arr = []
//   while(head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   arr = [...new Set(arr)]
//   let res = new ListNode()
//   let current = res
//   arr.forEach(v => {
//     current.next = new ListNode(v)
//     current = current.next
//   })
//   return res.next
// };

var deleteDuplicates = function(head) {
  let arr = []
  let res = new ListNode()
  let current = res
  while(head) {
    if(arr.indexOf(head.val) === -1) {
      arr.push(head.val)
      current.next = new ListNode(head.val)
      current = current.next
      head = head.next
    } else {
      head = head.next
    }
  }
  return res.next
};
