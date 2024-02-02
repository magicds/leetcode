func stoneGameVI(aliceValues []int, bobValues []int) int {
	scoreA, scoreB, n := 0, 0, len(aliceValues)
	commomValues := make([][]int, n)

	for i := 0; i < n; i++ {
		commomValues[i] = []int{aliceValues[i] + bobValues[i], aliceValues[i], bobValues[i]}
	}
	sort.Slice(commomValues, func(i int, j int) bool {
		return commomValues[i][0] > commomValues[j][0]
	})
	for i := 0; i < n; i++ {
		if (i & 1) == 0 {
			scoreA += commomValues[i][1]
		} else {
			scoreB += commomValues[i][2]
		}
	}
	if scoreA == scoreB {
		return 0
	} else if scoreA > scoreB {
		return 1
	} else {
		return -1
	}
}
