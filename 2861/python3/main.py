class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: list[list[int]], stock: list[int], cost: list[int]) -> int:
        left, right, result = 1, 2 * 10 ** 8, 0

        while left <= right:
            mid, ok = left + ((right - left) >> 1), False
            for i in range(k):
                spend = 0
                for j in range(n):
                    spend += max(0, composition[i][j] * mid - stock[j]) * cost[j]
                if spend <= budget:
                    ok = True
                    break
            if ok:
                result = mid
                left = mid + 1
            else:
                right = mid - 1

        return result
