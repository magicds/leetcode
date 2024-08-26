func findPeaks(mountain []int) []int {
	n := len(mountain)
	result := make([]int, 0)
	if n <= 2 {
		return result
	}
	var prev, curr, next int
	for i := 1; i < n-1; i++ {
		prev = mountain[i-1]
		curr = mountain[i]
		next = mountain[i+1]
		if curr > prev && curr > next {
			result = append(result, i)
		}
	}
	return result
}
