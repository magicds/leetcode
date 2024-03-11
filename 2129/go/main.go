func capitalizeTitle(title string) string {
	arr1 := strings.Split(title, " ")
	result := make([]string, 0, len(arr1))
	for _, word := range arr1 {
		if len(word) <= 2 {
			result = append(result, strings.ToLower(word))
		} else {
			result = append(result, strings.ToUpper(string(word[0]))+strings.ToLower(word[1:]))
		}
	}
	return strings.Join(result, " ")
}
