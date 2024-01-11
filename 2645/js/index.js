/*
 * @lc app=leetcode.cn id=2645 lang=javascript
 *
 * [2645] 构造有效字符串的最少插入数
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function (word) {
    const abc = ["a", "b", "c"];
    let result = 0;
    let i = 0;
    const n = word.length;
    for (let j = 0; j < n; j++) {
        // 如果不匹配abc[i]，则需要插入一个abc[i]
        while (word[j] != abc[i]) {
            result++;
            i = (i + 1) % 3;
        }
        i = (i + 1) % 3;
    }
    // 恰好abc结束， i = 0 无须处理
    // 不是abc 结束 假设 ab 结束 i = 2, 需要插入一个c; 假设 a 结束 i = 1, 需要插入一个bc
    result += (3 - i) % 3;
    return result;
};
// @lc code=end

console.log(addMinimum("b"));
console.log(addMinimum("aaa"));
console.log(addMinimum("abc"));
