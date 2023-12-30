/*
 * @lc app=leetcode.cn id=2660 lang=golang
 *
 * [2660] 保龄球游戏的获胜者
 */

// @lc code=start
func isWinner(player1 []int, player2 []int) int {
	score1, score2, n, rate1, rate2 := 0, 0, len(player1), 1, 1

	for i := 0; i < n; i++ {
		if i > 0 && (player1[i-1] == 10 || (i > 1 && player1[i-2] == 10)) {
			rate1 = 2
		} else {
			rate1 = 1
		}
		score1 += rate1 * player1[i]

		if i > 0 && (player2[i-1] == 10 || (i > 1 && player2[i-2] == 10)) {
			rate2 = 2
		} else {
			rate2 = 1
		}
		score2 += rate2 * player2[i]
	}
	if score1 == score2 {
		return 0
	}
	if score1 > score2 {
		return 1
	}
	return 2
}

// @lc code=end

