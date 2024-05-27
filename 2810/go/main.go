package main

// code
func finalString(s string) string {
	arr := []rune{}
	appendToHead := false

	for _, c := range s {
		if c == 'i' {
			appendToHead = !appendToHead
		} else {
			if appendToHead {
                // 创建一个单个元素的 c 的切片
                // 再把原来的切片内的放进去
                // 等价于在前面添加
				arr = append([]rune{c}, arr...)
			} else {
				arr = append(arr, c)
			}
		}
	}
	if appendToHead {
		reverse(arr)
	}
	return string(arr)
}

func reverse(arr []rune) {
	l := len(arr) - 1
	for i, j := 0, l; i < j; i, j = i+1, j-1 {
		arr[i], arr[j] = arr[j], arr[i]
	}
}
