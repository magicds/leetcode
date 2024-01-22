func maximumSwap(num int) int {
	digits := []byte(strconv.Itoa(num))
	n := len(digits)
	maxIndex, index1, index2 := n-1, -1, -1
	for i := n - 1; i >= 0; i-- {
		if digits[i] > digits[maxIndex] {
			maxIndex = i
		} else if digits[i] < digits[maxIndex] {
			index1 = i
			index2 = maxIndex
		}
	}
	if index1 >= 0 {
		digits[index1], digits[index2] = digits[index2], digits[index1]
		result, _ := strconv.Atoi(string(digits))
		return result
	}
	return num
}
