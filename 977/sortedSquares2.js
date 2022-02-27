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
  // 二分法找正负数的分界点 t 为第一个大于等于0的下标
  var i = 0, len = nums.length, j = len - 1, mid = 0;
  var t = -1;
  while (i < j) {
    mid = ((j - i) >> 1) + i;
    if (nums[mid] < 0) {
      i = mid + 1;
      if (nums[mid + 1] >= 0) {
        t = mid + 1;
        break;
      }
    } else {
      j = mid;
    }
  }
  if (t === -1) {
    // 全部整数或全部负数
    t = i === 0 ? i : len;
  }
  if (t === 0) {
    return nums.map((item) => item ** 2);
  }
  // 以 t 为分割 两边遍历
  var res = new Array(len);
  i = t - 1;
  j = t;
  var index = 0;
  var a, b;
  while (i >= 0 || j < len) {
    if (i < 0) {
      res[index] = nums[j] ** 2;
      j++;
    } else if (j === len) {
      res[index] = nums[i] ** 2;
      i--;
    } else {
      a = nums[i] ** 2;
      b = nums[j] ** 2;
      if (a < b) {
        res[index] = a;
        i--;
      } else {
        res[index] = b;
        j++;
      }
    }
    index++;
  }
  return res;
};
// @lc code=end

// console.log(sortedSquares([-5, -3, -2, -1]));
// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-4, -3, -2, -1, 0]));
// console.log(sortedSquares([1, 2, 3, 4, 5]));
// console.log(sortedSquares([-4, -1, 0, 3, 10]));
// console.log(sortedSquares([-7, -3, 2, 3, 11]));
