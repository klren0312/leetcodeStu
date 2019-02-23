/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode-cn.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (67.20%)
 * Total Accepted:    13.5K
 * Total Submissions: 20K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y < 231.
 * 
 * 示例:
 * 
 * 
 * 输入: x = 1, y = 4
 * 
 * 输出: 2
 * 
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠       ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xt = x.toString(2),
      yt = y.toString(2)
  let xl = xt.length
      yl = yt.length

  let count = 0
  
  // for(let i = 0; i < Math.abs(4 - xl); i++) {
  //   xa.unshift('0')
  // }

  // for(let i = 0; i < Math.abs(4 - yl); i++) {
  //   ya.unshift('0')
  // }

  if (xl > yl) {
    yt = Array(xl - yl + 1).join('0') + yt;
  } else {
    xt = Array(yl - xl + 1).join('0') + xt;
  }
  let xa = xt.split('')  
      ya = yt.split('')
  for(let i = 0; i <= xa.length; i++) {
    if(ya[i] !== xa[i]) count++
  }
  return count
};
// hammingDistance(680142203, 1111953568)
