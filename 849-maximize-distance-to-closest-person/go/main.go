
// #region start
func maxDistToClosest(seats []int) int {
	n, i, j, dist := len(seats), 0, 0, 0;
	for i < n {
		if seats[i] == 1 {
			break
		}
		i++
	}
	dist = i // 左端的最大距离
	for i < n {
		j = i + 1
		// 向右找到下一个人
		for j < n && seats[j] == 0 {
			j++
		}
		if j == i + 1 {
			i = j
			continue
		}
		if j < n {
			// 两人之间
			dist = max(dist, (j - i) / 2)
		} else {
			// 最右端
			dist = max(dist,  j - i - 1)
		}
		i = j
	}
	return dist
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}
//#endregion
