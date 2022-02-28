/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var i = 0, j = 0, len = nums.length, temp;
  while (j < len) {
    if (nums[j] !== 0) {
      if (i !== j) {
        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
      i++;
    }
    j++;
  }
};
