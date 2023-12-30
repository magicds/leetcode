#
# @lc app=leetcode.cn id=2706 lang=python3
#
# [2706] 购买两块巧克力
#

# @lc code=start
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        prices.sort()
        result = money - prices[0] - prices[1]
        if result >= 0:
            return result
        return money

# @lc code=end

