/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const m = rolls.length;
    const total = mean * (m + n);
    let rollsTotal = 0;
    for (let i = 0; i < m; i++) {
        rollsTotal += rolls[i];
    }
    const miss = total - rollsTotal;
    if (miss < n || miss / n > 6) {
        return [];
    }
    return num2arr(miss, n);
};

// 把一个数字拆分成指定长度的数组
function num2arr(total, n) {
    const quotient = (total / n) >>> 0;
    const remainder = total % n;
    const arr = new Array(n).fill(quotient);
    if (!remainder) {
        return arr;
    }
    // arr[0] = quotient + remainder; // 会超出6
    // 想办法把多的余数分给数组中的元素，
    // 用最快的方法，最先加个最前面的，依次补到6，没用完则继续下一个
    let remaining = remainder;
    let i = 0;
    let temp;
    while (remaining) {
        temp = 6 - arr[i];
        if (temp >= remaining) {
            arr[i] += remaining;
            break;
        }
        arr[i] = 6;
        remaining -= temp;
        i++;
    }
    return arr;
}
