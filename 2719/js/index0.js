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
/**
 * get digit sum of x
 * @param {number} x a number
 */
function digit_sum(x) {
    let sum = 0;
    while (x) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    return sum;
}
const MOD = 1e9 + 7;
/**
 * @param {string} num1
 * @param {string} num2
 * @param {number} min_sum
 * @param {number} max_sum
 * @return {number}
 */
var count = function (num1, num2, min_sum, max_sum) {
    var start = Number(num1);
    var end = Number(num2);
    var result = 0;

    while (start <= end) {
        var sum = digit_sum(start);
        if (sum >= min_sum && sum <= max_sum) {
            result++;
        }
        start++;
    }
    return result >= MOD ? result % MOD : result;
};

// @lc code=end

console.log(count("1", "12", 1, 8));
console.log(count("1", "5", 1, 5));
console.time("t1");
console.log(count("4179205230", "7748704426", 8, 46));
console.timeEnd("t1");
