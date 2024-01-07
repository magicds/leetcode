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
    var n = heights.length;
    var result = new Array(n).fill(0);
    var stack = [];
    var h = 0;

    for (var i = n - 1; i >= 0; i--) {
        h = heights[i];
        while (stack.length && stack[stack.length - 1] <= h) {
            result[i]++;
            stack.pop();
        }
        if (stack.length) {
            result[i]++;
        }
        stack.push(h);
    }
    return result;
};
// @lc code=end

console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9]));
console.log(canSeePersonsCount([5, 1, 2, 3, 10]));
