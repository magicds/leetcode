func missingRolls(rolls []int, mean int, n int) []int {
	m := len(rolls)
	total := mean * (m + n)
	miss := total
	for _, it := range rolls {
		miss -= it
	}
	if miss < n || miss > 6*n {
		return nil
	}
	return mum2arr(miss, n)
}
func mum2arr(total int, n int) []int {
	quotient, remainder := total/n, total%n
	arr := make([]int, n)
	for i := range arr {
		arr[i] = quotient
	}

	if remainder == 0 {
		return arr
	}

	for i := 0; remainder > 0 && i < n; i++ {
		temp := min(remainder, 6-arr[i])
		arr[i] += temp
		remainder -= temp
	}
	return arr
}
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
