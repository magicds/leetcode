/*
 * @lc app=leetcode.cn id=2645 lang=golang
 *
 * [2645] 构造有效字符串的最少插入数
 */

// @lc code=start
func addMinimum(word string) int {
	n, count := len(word), 1
	for i := 1; i < n; i++ {
		// 两个字母不是连续的出现了一个新的组
		if word[i] <= word[i-1] {
			count++
		}
	}
    // 组的数目 * 3 - 原有的就是操作的次数
	return count*3 - n
}

// @lc code=end

