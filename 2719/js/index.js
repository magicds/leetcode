/*
2719. 统计整数数目
给你两个数字字符串 `num1` 和 `num2` ，以及两个整数 `max_sum` 和 `min_sum` 。如果一个整数 `x` 满足以下条件，我们称它是一个好整数：

- `num1 <= x <= num2`
- `min_sum <= digit_sum(x) <= max_sum`.

请你返回好整数的数目。答案可能很大，请返回答案对 <code>10<sup>9</sup> + 7</code> (`10^9 + 7`) 取余后的结果。

注意，`digit_sum(x)` 表示 `x` 各位数字之和。

---
**示例 1：**

```
输入：num1 = "1", num2 = "12", min_num = 1, max_num = 8
输出：11
解释：总共有 11 个整数的数位和在 1 到 8 之间，分别是 1,2,3,4,5,6,7,8,10,11 和 12 。所以我们返回 11 。
```

**示例 2：**

```
输入：num1 = "1", num2 = "5", min_num = 1, max_num = 5
输出：5
解释：数位和在 1 到 5 之间的 5 个整数分别为 1,2,3,4 和 5 。所以我们返回 5 。
```
/*
/*
 * @lc app=leetcode.cn id=2719 lang=javascript
 *
 * [2719] 统计整数数目
 */

// @lc code=start

const MOD = 1e9 + 7;
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
    /**
     *
     * @dependent dp、min_sum、max_sum
     * @param {string} max 数字上限
     * @param {number} n 总的位数
     * @param {number} index 当前的位数
     * @param {number} currentSum 当前的和
     * @param {boolean} isLimit 是否是上限
     * @return {number} 个数
     */
    function getCount(max, n, index, currentSum, isLimit) {
        // 递归终止条件 直接验证范围
        if (index === n) {
            return currentSum >= min_sum && currentSum <= max_sum ? 1 : 0;
        }
        // 直接使用
        if (!isLimit && dp[index][currentSum] !== -1) {
            return dp[index][currentSum];
        }
        // 递归逻辑
        // 当前能用的最大数字
        var limit = isLimit ? parseInt(max[index], 10) : 9;
        var count = 0; // 计数
        for (var i = 0; i <= limit; i++) {
            newSum = currentSum + i;
            newLimit = isLimit && i === limit;
            // 递归计算下一个状态有多少个
            count += getCount(max, n, index + 1, newSum, newLimit);
            count %= MOD;
        }
        if (!isLimit) {
            dp[index][currentSum] = count;
        }
        return count;
    }

    // 计算到大的有多少个
    var length = num2.length;
    var maxDigitSum = length * 9;
    var dp = Array.from({ length }, () => Array(maxDigitSum + 1).fill(-1));
    var countMax = getCount(num2, length, 0, 0, true);

    // 计算到小的有多少个
    // var minNum = String(parseInt(num1, 10) - 1); // 不能parseInt处理， js 中溢出范围导致结果不对
    var minNum = bigNumberMinusOne(num1);
    length = minNum.length;
    dp = Array.from({ length }, () => Array(maxDigitSum + 1).fill(-1));
    var countMin = getCount(minNum, length, 0, 0, dp, true);

    return (countMax - countMin + MOD) % MOD;
};
/**
 * 大数字减1
 * @param {string} num
 * @returns
 */
function bigNumberMinusOne(num) {
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
    arr[i] = arr[i] - 1;
    i++; // 下标移动到要改为9的位置
    while (i < length) {
        arr[i] = "9";
        i++;
    }
    return arr.join("").replace(/^0+/, "");
}

// @lc code=end

console.log(count("1", "12", 1, 8)); // 11
console.log(count("1", "5", 1, 5)); // 5
console.time("t1");
console.log(count("4179205230", "7748704426", 8, 46)); // 883045899
console.timeEnd("t1");

console.time("t2");
console.log(count("1012640017461217236611", "9234552128261772272769", 67, 148)); // 683479047
console.timeEnd("t2");
