func distinctDifferenceArray(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	suffixCountArray := make([]int, n+1)
	s := map[int]int{}
	for i := n - 1; i > 0; i-- {
		s[nums[i]] = int(1)
		suffixCountArray[i] = len(s)
	}
	s = map[int]int{}
	for i := 0; i < n; i++ {
		s[nums[i]] = int(1)
		result[i] = len(s) - suffixCountArray[i+1]
	}
	return result
}
