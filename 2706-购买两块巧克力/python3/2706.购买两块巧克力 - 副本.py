#
# @lc app=leetcode.cn id=2706 lang=python3
#
# [2706] 购买两块巧克力
#

# @lc code=start
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        min1,min2 = 101,101
        for v in prices:
            if v < min1:
                min2 = min1
                min1 = v
            elif v < min2:
                min2 = v
        result = money - min1 - min2
        if result >= 0:
            return result
        return money

# @lc code=end

