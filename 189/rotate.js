/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  var times = k % nums.length;
  if (times !== 0) {
    var start = nums.splice(0, nums.length - times);
    nums.push(...start);
  }
};
