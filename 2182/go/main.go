import (
	"strings"
)

func repeatLimitedString(s string, repeatLimit int) string {
	arr := make([]int, 26)
	for _, c := range s {
		arr[c-'a']++
	}
	var result strings.Builder
	i, subRepeat := 25, 0

	for i >= 0 {
		if arr[i] == 0 {
			i--
			subRepeat = 0
		} else if subRepeat < repeatLimit {
			result.WriteRune('a' + rune(i))
			subRepeat++
			arr[i]--
		} else {
			next := -1
			for j := i - 1; j >= 0; j-- {
				if arr[j] > 0 {
					next = j
					break
				}
			}
			if next == -1 {
				break
			}
			result.WriteRune('a' + rune(next))
			arr[next]--
			subRepeat = 1
			if arr[i] > 0 {
				subRepeat = 0
			}
		}
	}
	return result.String()
}
