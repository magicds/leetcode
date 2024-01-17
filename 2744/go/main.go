func maximumNumberOfStringPairs(words []string) int {
	m := make(map[string]int)
	var rd string
	var ans int
	for _, word := range words {
		rd = string(word[1]) + string(word[0])
		if m[rd] == 1 {
			ans++
		}
		m[word] = 1
	}

	return ans
}
