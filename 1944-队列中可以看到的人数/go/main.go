/*
 * @lc app=leetcode.cn id=1944 lang=golang
 *
 * [1944] 队列中可以看到的人数
 */

// @lc code=start
func canSeePersonsCount(heights []int) []int {
	n, stack, h := len(heights), make([]int, 0), 0
	result := make([]int, n)

	for i := n - 1; i >= 0; i-- {
		h = heights[i]
		for len(stack) > 0 && stack[len(stack)-1] <= h {
			stack = stack[:len(stack)-1]
			result[i]++
		}
		if len(stack) > 0 {
			result[i]++
		}
		stack = append(stack, h)
	}
	return result
}

// @lc code=end

