#
# @lc app=leetcode.cn id=2719 lang=python3
#
# [2719] 统计整数数目
#


# @lc code=start
class Solution:
    def count(self, num1: str, num2: str, min_sum: int, max_sum: int) -> int:
        MOD = 10**9 + 7

        def max_possible_digit_sum(length):
            return 9 * length  # Maximum sum if all digits are 9

        def countNumbers(upper, n, index, sum_so_far, min_sum, max_sum, is_limit, dp):
            if index == n:
                return min_sum <= sum_so_far <= max_sum
            if not is_limit and dp[index][sum_so_far] != -1:
                return dp[index][sum_so_far]

            limit = int(upper[index]) if is_limit else 9
            count = 0
            for digit in range(limit + 1):
                new_sum = sum_so_far + digit
                new_limit = is_limit and (digit == limit)
                count += countNumbers(
                    upper, n, index + 1, new_sum, min_sum, max_sum, new_limit, dp
                )
                count %= MOD

            if not is_limit:
                dp[index][sum_so_far] = count
            return count

        length = len(num2)
        max_digit_sum = max_possible_digit_sum(length)
        dp = [[-1 for _ in range(max_digit_sum + 1)] for _ in range(length)]
        count_up_to_num2 = countNumbers(num2, length, 0, 0, min_sum, max_sum, True, dp)

        length = len(str(int(num1) - 1))
        dp = [[-1 for _ in range(max_digit_sum + 1)] for _ in range(length)]
        count_up_to_num1 = countNumbers(
            str(int(num1) - 1), length, 0, 0, min_sum, max_sum, True, dp
        )

        return (count_up_to_num2 - count_up_to_num1) % MOD


# @lc code=end

print(Solution().count("1", "12", 1, 8))
print(Solution().count("1", "5", 1, 5))
print(Solution().count("4179205230", "7748704426", 8, 46))
