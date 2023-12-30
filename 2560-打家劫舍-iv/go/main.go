/*
 * @lc app=leetcode.cn id=2560 lang=golang
 *
 * [2560] 打家劫舍 IV
 */

// @lc code=start
func minCapability(nums []int, k int) int {
	min, max := 0, 0
	for _, v := range nums {
		if v > max {
			max = v
		}
		if v < min {
			min = v
		}
	}
	for min <= max {
		mid := min + (max-min)/2
		if check(nums, mid, k) {
			max = mid - 1
		} else {
			min = mid + 1
		}
	}

	return min
}

func check(nums []int, mid int, k int) bool {
	count, stolen := 0, false
	for _, v := range nums {
		if v <= mid && !stolen {
			count++
			stolen = true
		} else {
			stolen = false
		}
	}
	return count >= k
}

// @lc code=end

