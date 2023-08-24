func countServers(grid [][]int) int {
	count, rows, cols, rowMap, colMap := 0, len(grid), len(grid[0]), make(map[int]int), make(map[int]int)
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == 1 {
				rowMap[i]++
				colMap[j]++
			}
		}
	}
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == 1 && (rowMap[i] > 1 || colMap[j] > 1) {
				count++
			}
		}
	}

	return count
}
