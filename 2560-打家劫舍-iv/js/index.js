/*
 * @lc app=leetcode.cn id=2560 lang=javascript
 *
 * [2560] 打家劫舍 IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) min = nums[i];
        if (nums[i] > max) max = nums[i];
    }

    while (min <= max) {
        const mid = min + Math.floor((max - min) / 2);
        let count = 0;
        let stolen = false;
        // 模拟偷的过程 逐个判断 累计出偷过的数目
        for (const it of nums) {
            if (it <= mid && !stolen) {
                count++;
                stolen = true;
            } else {
                stolen = false;
            }
        }
        // 如果偷的数目大于k
        if (count >= k) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }

    return min;
};
// @lc code=end
