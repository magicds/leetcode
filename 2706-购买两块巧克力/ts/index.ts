/*
 * @lc app=leetcode.cn id=2706 lang=typescript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    const result = prices[0] + prices[1];
    return money >= result ? money - result : money;
};
// @lc code=end

