#
# @lc app=leetcode.cn id=2660 lang=python3
#
# [2660] 保龄球游戏的获胜者
#

# @lc code=start
class Solution:
    def isWinner(self, player1: List[int], player2: List[int]) -> int:
        score1 = 0
        score2 = 0
        rate1 = 1
        rate2 = 1
        n = len(player1)
        for i in range(n):
            if i > 0 and (player1[i-1] == 10 or (i > 1 and player1[i-2] == 10)) :
                rate1 = 2
            else:
                rate1 = 1
            score1 += rate1 * player1[i]
            if i > 0 and (player2[i-1] == 10 or (i > 1 and player2[i-2] == 10)) :
                rate2 = 2
            else:
                rate2 = 1
            score2 += rate2 * player2[i]

        return 0 if score1 == score2 else 1 if score1 > score2 else 2

# @lc code=end

