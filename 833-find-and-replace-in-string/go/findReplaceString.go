type Item struct {
	Length int
	Target string
}

func findReplaceString(s string, indices []int, sources []string, targets []string) string {
	replaceMap, n, m := make(map[int]Item), len(indices), len(s)
	var (
		index    int
		source   string
		item     string
		endIndex int
	)
	for i := 0; i < n; i++ {
		index = indices[i]
		source = sources[i]
		endIndex = index + len(source)
		if endIndex > m {
			endIndex = m
		}
		item = string(s[index:endIndex])
		if item == source {
			replaceMap[index] = Item{len(source), targets[i]}
		}
	}
	result, i := "", 0

	for i < m {
		if temp, ok := replaceMap[i]; ok {
			result += temp.Target
			i += temp.Length
		} else {
			result += string(s[i])
			i++
		}
	}

	return result
}
