/*
 * @lc app=leetcode.cn id=2706 lang=javascript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    // prices.sort((a, b) => a - b);
    // const result = prices[0] + prices[1];
    // return money >= result ? money - result : money;
    var min1 = 101;
    var min2 = 101;
    var n = prices.length;
    for (var i = 0; i < n; i++) {
        if (prices[i] < min1) {
            min2 = min1;
            min1 = prices[i];
        } else if (prices[i] < min2) {
            min2 = prices[i];
        }
    }
    var result = money - min1 - min2;
    return result >= 0 ? result : money;
};
// @lc code=end
