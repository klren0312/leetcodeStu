/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (59.29%)
 * Total Accepted:    15.7K
 * Total Submissions: 26.4K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = []
  for(let i = 1; i <= numRows; i++) {
    if(i === 1) {
      result.push([1])
    }
    else if(i === 2) {
      result.push([1,1])
    } else {
      let pre = result[result.length-1]
      let cur = new Array(i)
      cur[0] = 1
      for(let j = 0; j < i - 1; j++) {
        cur[j+1] = pre[j] + pre[j+1]
      }
      cur[i-1] = 1
      result.push(cur)
    } 
  }
  return result
};
