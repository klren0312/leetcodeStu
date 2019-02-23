/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (53.41%)
 * Total Accepted:    9.6K
 * Total Submissions: 17.9K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = []
  let k = rowIndex + 1
  for(let i = 1; i <= k; i++) {
    if(i === 1) {
      result.push([1])
    }
    else if(i === 2) {
      result.push([1, 1])
    } else {
      let pre = result[result.length - 1]
      let cur = new Array(i)
      cur[0] = 1
      for(let j = 0; j < i - 2; j++) {
        cur[j + 1] = pre[j] + pre[j + 1]
      }
      cur[i-1] = 1
      result.push(cur)
    }
  }
  return result[k-1]
};
