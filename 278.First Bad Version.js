/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let begin = 0
        let end = n
        let last
        while (begin <= end) {
            let mid = Math.floor((begin + end) / 2)
            if (isBadVersion(mid)) {
                last = mid
                end = mid - 1
            } else {
                begin = mid + 1
            }
        }
        return last
    };
};
// @lc code=end

