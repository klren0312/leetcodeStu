/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let temp = []
  if (root === null) {
    return temp
  }
  
  const left = inorderTraversal(root.left)
  const right = inorderTraversal(root.right)
  return temp.concat(left).concat([root.val]).concat(right)
};
// @lc code=end

