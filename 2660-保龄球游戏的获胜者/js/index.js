/*
 * @lc app=leetcode.cn id=2660 lang=javascript
 *
 * [2660] 保龄球游戏的获胜者
 */

// @lc code=start
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    var score1 = 0;
    var score2 = 0;
    var n = player1.length;

    var double1 = false;
    var double2 = false;
    for (var i = 0; i < n; i++) {
        if (
            i > 0 &&
            (player1[i - 1] == 10 || (i > 1 && player1[i - 2] == 10))
        ) {
            double1 = true;
        } else {
            double1 = false;
        }
        if (double1) {
            score1 += player1[i] * 2;
        } else {
            score1 += player1[i];
        }

        if (
            i > 0 &&
            (player2[i - 1] == 10 || (i > 1 && player2[i - 2] == 10))
        ) {
            double2 = true;
        } else {
            double2 = false;
        }
        if (double2) {
            score2 += player2[i] * 2;
        } else {
            score2 += player2[i];
        }
    }
    console.log(score1, score2);
    if (score1 === score2) {
        return 0;
    }
    return score1 > score2 ? 1 : 2;
};
// @lc code=end

console.log(isWinner([4, 10, 7, 9], [6, 5, 2, 3]));
console.log(isWinner([3, 5, 7, 6], [8, 10, 10, 2]));
console.log(isWinner([2, 3], [4, 1]));
console.log(isWinner([10, 2, 2, 3], [3, 8, 4, 5]));
