/*
 * @lc app=leetcode.cn id=2660 lang=typescript
 *
 * [2660] 保龄球游戏的获胜者
 */

// @lc code=start
function isWinner(player1: number[], player2: number[]): number {
    var score1 = 0;
    var score2 = 0;
    var n = player1.length;

    var rate1 = 1;
    var rate2 = 1;
    for (var i = 0; i < n; i++) {
        if (
            i > 0 &&
            (player1[i - 1] == 10 || (i > 1 && player1[i - 2] == 10))
        ) {
            rate1 = 2;
        } else {
            rate1 = 1;
        }
        score1 += player1[i] * rate1;

        if (
            i > 0 &&
            (player2[i - 1] == 10 || (i > 1 && player2[i - 2] == 10))
        ) {
            rate2 = 2;
        } else {
            rate2 = 1;
        }
        score2 += player2[i] * rate2;
    }
    if (score1 === score2) {
        return 0;
    }
    return score1 > score2 ? 1 : 2;
}
// @lc code=end
