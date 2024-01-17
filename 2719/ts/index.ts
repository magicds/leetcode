/*
 * @lc app=leetcode.cn id=2719 lang=typescript
 *
 * [2719] 统计整数数目
 */

// @lc code=start

const MOD = 1000000007;
/**
 * 大数字减1
 */
function bigNumberMinusOne(num: string): string {
    // 最后一位非0 那么只用最后一位减1
    var length = num.length;
    var lastDigit = parseInt(num[length - 1], 10);
    if (lastDigit > 0) {
        return num.substring(0, length - 1) + (lastDigit - 1);
    }
    // 最后一个非0的数字减1 后面的0改为9
    var arr = num.split("");
    var i = length - 1;
    // 寻找这个i
    while (arr[i] === "0") {
        i--;
    }
    arr[i] = String(parseInt(arr[i], 10) - 1);
    i++; // 下标移动到要改为9的位置
    while (i < length) {
        arr[i] = "9";
        i++;
    }
    return arr.join("").replace(/^0+/, "");
}

function count(
    num1: string,
    num2: string,
    min_sum: number,
    max_sum: number
): number {
    /**
     * 计算区间内的数字个数
     */
    function getCount(
        max: string,
        n: number,
        index: number,
        currentSum: number,
        isLimit: boolean,
        dp: number[][]
    ) {
        if (index === n) {
            return currentSum >= min_sum && currentSum <= max_sum ? 1 : 0;
        }
        if (!isLimit && dp[index][currentSum] !== -1) {
            return dp[index][currentSum];
        }
        const limit = isLimit ? parseInt(max[index], 10) : 9;
        let count = 0;

        for (let i = 0; i <= limit; i++) {
            let newSum = currentSum + i;
            let newLimit = isLimit && limit === i;
            count += getCount(max, n, index + 1, newSum, newLimit, dp);
            count %= MOD;
        }
        if (!isLimit) {
            dp[index][currentSum] = count;
        }
        return count % MOD;
    }
    const length = num2.length;
    const maxDigitSum = length * 9;
    var dp = Array.from({ length }, () => Array(maxDigitSum + 1).fill(-1));
    const countRight = getCount(num2, length, 0, 0, true, dp);

    const minNum = bigNumberMinusOne(num1);
    const length2 = minNum.length;
    dp = Array.from({ length: length2 }, () => Array(maxDigitSum + 1).fill(-1));
    const countLeft = getCount(minNum, length2, 0, 0, true, dp);
    return (countRight - countLeft + MOD) % MOD;
}
// @lc code=end
