class Solution:
    def distinctDifferenceArray(self, nums: list[int]) -> list[int]:
        n = len(nums)
        s = set()
        suffixCountArray = [0] * (n + 1)
        for i in range(n - 1, 0, -1):
            s.add(nums[i])
            suffixCountArray[i] = len(s)
        res = [0] * n
        s = set()
        for i in range(n):
            s.add(nums[i])
            res[i] = len(s) - suffixCountArray[i + 1]
        return res
