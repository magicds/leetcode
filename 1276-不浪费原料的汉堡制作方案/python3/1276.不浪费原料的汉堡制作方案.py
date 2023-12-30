#
# @lc app=leetcode.cn id=1276 lang=python3
#
# [1276] 不浪费原料的汉堡制作方案
#

# @lc code=start
class Solution:
    def numOfBurgers(self, tomatoSlices: int, cheeseSlices: int) -> list[int]:
        if tomatoSlices % 2 != 0 or tomatoSlices < 2* cheeseSlices or cheeseSlices * 4 < tomatoSlices:
            return []

        return [(tomatoSlices >>1) - cheeseSlices, 2 * cheeseSlices - (tomatoSlices >> 1)]
# @lc code=end

# 0 0 -> [0,0]
# run test
s = Solution()
print(s.numOfBurgers(16,7))
print(s.numOfBurgers(0,0))
