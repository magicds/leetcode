package main

func splitWordsBySeparator(words []string, separator byte) []string {
	result := make([]string, 0)
	for _, word := range words {
		item := ""
		for _, c := range word {
			if byte(c) == separator {
				if len(item) > 0 {
					result = append(result, item)
					item = ""
				}
			} else {
				item += string(c)
			}
		}
		if len(item) > 0 {
			result = append(result, item)
			item = ""
		}
	}
	return result
}
