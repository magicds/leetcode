/*
 * @lc app=leetcode.cn id=1944 lang=javascript
 *
 * [1944] 队列中可以看到的人数
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    var result = new Array(heights.length).fill(0);
    var n = heights.length;
    var i = 0,
        j = 0;
    var max = 0;

    for (i = 0; i < n - 1; i++) {
        max = 0;
        for (j = i + 1; j < n; j++) {
            if (Math.min(heights[j], heights[i]) > max) {
                max = Math.max(max, heights[j]);
                result[i]++;
            }
        }
    }
    return result;
};
// @lc code=end

console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9]));
console.log(canSeePersonsCount([5, 1, 2, 3, 10]));

