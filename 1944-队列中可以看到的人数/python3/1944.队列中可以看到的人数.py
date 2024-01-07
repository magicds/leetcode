#
# @lc app=leetcode.cn id=1944 lang=python3
#
# [1944] 队列中可以看到的人数
#

# @lc code=start
class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        n, stack, h = len(heights), [], 0
        result = [0] * n
        for i in range(n - 1, -1, -1):
            h = heights[i]
            while stack and h > stack[-1]:
                stack.pop()
                result[i] += 1
            if stack:
                result[i] += 1
            stack.append(h)
        return result

# @lc code=end

