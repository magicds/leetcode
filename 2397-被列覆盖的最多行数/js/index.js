/*
 * @lc app=leetcode.cn id=2397 lang=javascript
 *
 * [2397] 被列覆盖的最多行数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} numSelect
 * @return {number}
 */
var maximumRows = function (matrix, numSelect) {
    var m = matrix.length;
    var n = matrix[0].length;
    var mask = new Array(m).fill(0);
    var i = 0,
        j = 0;
    for (; i < m; i++) {
        for (j = 0; j < n; j++) {
            mask[i] += matrix[i][j] << (n - 1 - j);
        }
    }
    var result = 0;
    var current = 0;
    const max = 1 << n;
    while (++current < max) {
        if (getOneCount(current) != numSelect) {
            continue;
        }
        var count = 0;
        for (i = 0; i < m; i++) {
            if ((mask[i] & current) == mask[i]) {
                count++;
            }
        }
        if (count > result) {
            result = count;
        }
    }
    return result;
};

function getOneCount(n) {
    var count = 0;
    while (n) {
        n = n & (n - 1);
        count++;
    }
    return count;
}
// @lc code=end
