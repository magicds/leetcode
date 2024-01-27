/**
 * @param {number} n 金属数目
 * @param {number} k 机器数目
 * @param {number} budget 预算
 * @param {number[][]} composition 对于第 i 台机器而言，创建合金需要 composition[i][j] 份 j 类型金属
 * @param {number[]} stock 拥有的金属
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function (n, k, budget, composition, stock, cost) {
    let left = 1;
    let right = 2 * 10 ** 8;
    let result = 0;

    while (left <= right) {
        let mid = left + (((right - left) / 2) >> 0);
        let ok = false;
        for (let i = 0; i < k; i++) {
            let spend = 0;
            for (let j = 0; j < n; j++) {
                spend +=
                    Math.max(composition[i][j] * mid - stock[j], 0) * cost[j];
            }
            if (spend <= budget) {
                ok = true;
                break;
            }
        }
        if (ok) {
            // 当前满足，尝试更大的
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
