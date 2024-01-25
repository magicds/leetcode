class Solution:
    def sumIndicesWithKSetBits(self, nums: list[int], k: int) -> int:
        result = 0
        for i, num in enumerate(nums):
            if bin(i).count("1") == k:
                result += num
        return result


s = Solution()

print(s.sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1))
print(s.sumIndicesWithKSetBits([4, 3, 2, 1], 2))
