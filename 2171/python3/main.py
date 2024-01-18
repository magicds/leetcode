#
# @lc app=leetcode.cn id=2171 lang=python3
#
# [2171] 拿出最少数目的魔法豆
#


# @lc code=start
class Solution:
    def minimumRemoval(self, beans: list[int]) -> int:
        length = len(beans)
        if length <= 1:
            return 0
        beans.sort()
        prefix_sum = [0] * length
        total_beans = sum(beans)
        min_removal = float("inf")

        for i in range(length):
            # python 中 prefix_sum[-1] 是最后一位，无须单独处理第一位
            prefix_sum[i] = prefix_sum[i - 1] + beans[i]
            beans_to_remove = prefix_sum[i - 1] + (
                total_beans - prefix_sum[i] - (length - i - 1) * beans[i]
            )
            min_removal = min(min_removal, beans_to_remove)
        return min_removal


# @lc code=end

c = Solution()
print(c.minimumRemoval([4, 1, 6, 5]))
print(c.minimumRemoval([2, 10, 3, 2]))
print(c.minimumRemoval([10]))
print(c.minimumRemoval([10, 10]))
