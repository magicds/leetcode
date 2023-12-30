/*
 * @lc app=leetcode.cn id=2706 lang=golang
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
func buyChoco(prices []int, money int) int {
	// sort.Ints(prices)
	// result := prices[0] + prices[1]
	// if money >= result {
	//     return money - result
	// }
	// return money
	min1, min2 := 101, 101
	for _, v := range prices {
		if v < min1 {
			min2 = min1
			min1 = v
		} else if v < min2 {
			min2 = v
		}
	}
	result := money - min1 - min2
	if result >= 0 {
		return result
	}
	return money
}

// @lc code=end

