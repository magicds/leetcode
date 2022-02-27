/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  return nums.map((item) => item ** 2);
};
// @lc code=end
