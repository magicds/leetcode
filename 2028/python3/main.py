class Solution:
    def missingRolls(self, rolls: list[int], mean: int, n: int) -> list[int]:
        miss = mean * (n + len(rolls)) - sum(rolls)
        if miss > n*6 or miss < n:
            return []
        return self.num2arr(miss, n)

    def num2arr(self, total:int, n:int) -> list[int]:
        quotient, remainder = divmod(total, n)
        arr = [quotient for _ in range(n)]
        if remainder == 0:
            return arr
        i = 0
        while remainder >0:
            temp = 6 - arr[i]
            if temp >= remainder:
                arr[i] += remainder
                break

            arr[i] = 6
            remainder -= temp
            i += 1

        return arr
