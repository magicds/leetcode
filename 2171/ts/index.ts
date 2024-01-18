/*
 * @lc app=leetcode.cn id=2171 lang=typescript
 *
 * [2171] 拿出最少数目的魔法豆
 */

// @lc code=start
function minimumRemoval(beans: number[]): number {
    if (beans.length <= 1) {
        return 0;
    }
    beans.sort((a, b) => a - b);
    const total = beans.reduce((acc, b) => acc + b, 0);
    const length = beans.length;
    let result = total;
    let sumArray = new Array(length + 1).fill(0);
    let remove = 0;

    // 以当前为基准 比较每种情况的大小
    for (let i = 0; i < length; i++) {
        sumArray[i + 1] = sumArray[i] + beans[i]; // 下标往后偏移一位 可不用单独处理第一位
        // 之前的和 + 以当前为准要移除的
        // 以当前为准的要移除的 = 总和 - 之前的和 - 当前的数目 * 后面的长度
        remove =
            sumArray[i] +
            (total - sumArray[i + 1] - (length - i - 1) * beans[i]);
        result = Math.min(result, remove);
    }
    return result;
};
// @lc code=end

