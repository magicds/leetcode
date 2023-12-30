/*
 * @lc app=leetcode.cn id=1276 lang=golang
 *
 * [1276] 不浪费原料的汉堡制作方案
 */

// @lc code=start
func numOfBurgers(tomatoSlices int, cheeseSlices int) []int {
	// if tomatoSlices%2 != 0 {
	// 	return []int{}
	// }
	// x, y := 0, 0
	// max_x := int(tomatoSlices / 4)
	// for x <= max_x {
	// 	y = cheeseSlices - x
	// 	if 4*x+2*y == tomatoSlices {
	// 		return []int{x, y}
	// 	}
	// 	x++
	// }
	// return []int{}
	if tomatoSlices%2 != 0 || tomatoSlices < 2*cheeseSlices || tomatoSlices > 4*cheeseSlices {
		return []int{}
	}
	return []int{(tomatoSlices >> 1) - cheeseSlices, 2*cheeseSlices - (tomatoSlices >> 1)}
}

// @lc code=end

