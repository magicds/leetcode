/*
 * @lc app=leetcode.cn id=447 lang=golang
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
func numberOfBoomerangs(points [][]int) int {
	result := 0

	for _, p := range points {
		m := make(map[int]int)
		for _, q := range points {
			dis := (p[0]-q[0])*(p[0]-q[0]) + (p[1]-q[1])*(p[1]-q[1])
			m[dis]++
		}
		for _, v := range m {
			result += v * (v - 1)
		}
	}
	return result
}

// @lc code=end

