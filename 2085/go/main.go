func countWords(words1 []string, words2 []string) int {
	m1, m2 := make(map[string]int, 0), make(map[string]int, 0)
	for _, word := range words1 {
		m1[word]++
	}
	for _, word := range words2 {
		m2[word]++
	}
	result := 0
	for word, count := range m1 {
		if count == 1 && m2[word] == 1 {
			result++
		}
	}
	return result
}
