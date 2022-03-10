/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) {
    return
  }
  if (root.left === null && root.right === null) {
    return [root.val.toString()]
  }

  const res = []

  function dfs(tree, temp) {
    if (tree.left === null && tree.right === null) {
      res.push(temp + tree.val)
      return
    }
    if (tree.left !== null) {
      dfs(tree.left, temp + tree.val + '->')
    }
    if (tree.right !== null) {
      dfs(tree.right, temp + tree.val + '->')
    }
  }
  dfs(root, '')

  return res
};
// @lc code=end

