/*
 * @lc app=leetcode.cn id=1276 lang=typescript
 *
 * [1276] 不浪费原料的汉堡制作方案
 */

// @lc code=start
function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    // 4 * x + 2 * y = tomatoSlices
    // x + y = cheeseSlices
    // =>
    // x = tomatoSlices / 2 - cheeseSlices
    // y = 2*cheeseSlices - tomatoSlices / 2
    // x >= 0 && y >= 0
    // =>
    // tomatoSlices  >=  2 * cheeseSlices
    // 4 * cheeseSlices >= tomatoSlices

    if (
        tomatoSlices % 2 != 0 ||
        tomatoSlices < 2 * cheeseSlices ||
        4 * cheeseSlices < tomatoSlices
    ) {
        return [];
    }
    return [
        (tomatoSlices >> 1) - cheeseSlices,
        2 * cheeseSlices - (tomatoSlices >> 1)
    ];
}
// @lc code=end
