#
# @lc app=leetcode.cn id=2696 lang=python3
#
# [2696] 删除子串后的字符串最小长度
#

# @lc code=start
class Solution:
    def minLength(self, s: str) -> int:
        stack = []
        for c in s:
            stack.append(c)
            l = len(stack)
            if l > 1 and (stack[-2] == 'A' and stack[-1] == 'B' or stack[-2] == 'C' and stack[-1] == 'D'):
                stack.pop()
                stack.pop()
        return len(stack)
# @lc code=end

