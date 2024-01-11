#
# @lc app=leetcode.cn id=2645 lang=python3
#
# [2645] 构造有效字符串的最少插入数
#

# @lc code=start
class Solution:
    def addMinimum(self, word: str) -> int:
        n, count = len(word), 1
        for i in range(1, n):
            if word[i] <= word[i - 1]:
                count += 1
        return count * 3 - n

# @lc code=end

