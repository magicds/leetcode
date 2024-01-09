/*
 * @lc app=leetcode.cn id=447 lang=typescript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
function numberOfBoomerangs(points: number[][]): number {
    let result = 0;
    const map: Map<number, number> = new Map();
    for (const p of points) {
        map.clear();
        for (const q of points) {
            const dis = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2;
            map.set(dis, (map.get(dis) || 0) + 1);
        }
        for (let [k, v] of map.entries()) {
            result += v * (v - 1);
        }
    }
    return result;
}
// @lc code=end
