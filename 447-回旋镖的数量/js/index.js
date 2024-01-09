/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let result = 0;
    let map = {};
    for (let p of points) {
        map = {}; // 记录这个距离的点的个数
        for (let q of points) {
            let dis = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
            map[dis] = (map[dis] || 0) + 1;
        }
        // 和顺序有关，因此每个距离的数目为其排列数
        for (let key in map) {
            result += map[key] * (map[key] - 1);
        }
    }
    return result;
};
// @lc code=end
