class Solution:
    def minOperationsMaxProfit(
        self, customers: List[int], boardingCost: int, runningCost: int
    ) -> int:
        result, wait, maxMoney, money, i, n = -1, 0, 0, 0, 0, len(customers)
        while i < n or wait > 0:
            wait += customers[i] if i < n else 0
            current = wait if wait < 4 else 4
            wait -= current

            i += 1
            money += current * boardingCost - runningCost
            if money > maxMoney:
                maxMoney = money
                result = i

        return result
