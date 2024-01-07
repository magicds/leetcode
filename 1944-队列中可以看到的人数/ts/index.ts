/*
 * @lc app=leetcode.cn id=1944 lang=typescript
 *
 * [1944] 队列中可以看到的人数
 */

// @lc code=start
function canSeePersonsCount(heights: number[]): number[] {
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

