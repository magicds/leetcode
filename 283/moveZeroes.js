/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] === 0) {
      // 删除当前的一个并加入到最后
      nums.push(nums.splice(i, 1)[0]);
      i--;
      len--; // 每移动一次，需要判断的长度就减少一个
    }
  }
};
