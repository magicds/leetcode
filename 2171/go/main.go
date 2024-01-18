/*
 * @lc app=leetcode.cn id=2171 lang=golang
 *
 * [2171] 拿出最少数目的魔法豆
 */
package main

import "sort"

// @lc code=start
func minimumRemoval(beans []int) int64 {
	length := len(beans)
	if length <= 1 {
		return 0
	}
	sort.Ints(beans)
	var total int64 = 0
	for _, bean := range beans {
		total += int64(bean)
	}
	prevSumArr := make([]int64, length+1)

	var remove int64 = 0
	var result int64 = total

	for i, bean := range beans {
		prevSumArr[i+1] = prevSumArr[i] + int64(bean)
		remove = prevSumArr[i] + (total - prevSumArr[i+1] - int64(length-i-1)*int64(bean))
		result = min(result, remove)
	}
	return result
}
func min(a, b int64) int64 {
	if a < b {
		return a
	}
	return b
}

// @lc code=end

func main() {
	println(minimumRemoval([]int{4, 1, 6, 5}))
	println(minimumRemoval([]int{2, 10, 3, 2}))
	println(minimumRemoval([]int{10}))
	println(minimumRemoval([]int{10, 10}))
}
