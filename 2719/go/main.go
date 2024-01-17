/*
 * @lc app=leetcode.cn id=2719 lang=golang
 *
 * [2719] 统计整数数目
 */
package main

// @lc code=start

// 大数字减1
func bigNumberMinusOne(num string) string {
	arr := []byte(num)
	// 从后往前遍历
	for i := len(arr) - 1; i >= 0; i-- {
		if arr[i] == '0' {
			arr[i] = '9'
		} else {
			arr[i]--
			break
		}
	}
	return string(arr)
}

const MOD = 1000000007

func count(num1 string, num2 string, min_sum int, max_sum int) int {
	var getCount func(max string, n int, index int, sum int, limit bool, dp [][]int) int
	getCount = func(max string, n int, index int, sum int, limit bool, dp [][]int) int {
		if index == n {
			if sum >= min_sum && sum <= max_sum {
				return 1
			}
			return 0
		}
		if !limit && dp[index][sum] != -1 {
			return dp[index][sum]
		}
		var maxDig int
		if limit {
            // println("max[index]",max[index] - '0')
            // println("int(max[index])",int(max[index] - '0'))
			maxDig = int(max[index] - '0')
		} else {
			maxDig = 9
		}

		var count int
		for i := 0; i <= maxDig; i++ {
			var next_limit bool
			if limit && i == maxDig {
				next_limit = true
			} else {
				next_limit = false
			}
			count += getCount(max, n, index+1, sum+i, next_limit, dp)
			count %= MOD
		}
		if !limit {
			dp[index][sum] = count
		}
		return count
	}

	length := len(num2)
	maxDigitSum := length * 9
	dp := make([][]int, length)
	for i := range dp {
		dp[i] = make([]int, maxDigitSum+1)
		for j := range dp[i] {
			dp[i][j] = -1
		}
	}
	countRight := getCount(num2, length, 0, 0, true, dp)

	minNum := bigNumberMinusOne(num1)
	length = len(minNum)
	dp = make([][]int, length)
	for i := range dp {
		dp[i] = make([]int, maxDigitSum+1)
		for j := range dp[i] {
			dp[i][j] = -1
		}
	}
	countLeft := getCount(minNum, length, 0, 0, true, dp)

	return (countRight - countLeft + MOD) % MOD
}

// @lc code=end

func main() {
	println(bigNumberMinusOne("1234"))
	println(bigNumberMinusOne("10"))
	println(bigNumberMinusOne("10000"))

	println(count("1", "12", 1, 8), "11") // 11
	println(count("1", "5", 1, 5), "5")   // 5

	println(count("4179205230", "7748704426", 8, 46), "883045899") // 883045899

	println(count("1012640017461217236611", "9234552128261772272769", 67, 148), "683479047") // 683479047
}
