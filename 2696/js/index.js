/*
 * @lc app=leetcode.cn id=2696 lang=javascript
 *
 * [2696] 删除子串后的字符串最小长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
    const stack = [];
    let l = 0;
    for (const c of s) {
        stack.push(c);
        l = stack.length;
        if (l > 1) {
            if (
                (stack[l - 2] === "A" && stack[l - 1] === "B") ||
                (stack[l - 2] === "C" && stack[l - 1] === "D")
            ) {
                stack.pop();
                stack.pop();
            }
        }
    }
    return stack.length;
};
// @lc code=end
