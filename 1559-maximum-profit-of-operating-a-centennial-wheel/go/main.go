func minOperationsMaxProfit(customers []int, boardingCost int, runningCost int) int {
	result, wait, max, money, i, n := -1, 0, 0, 0, 0, len(customers)

	for i < n || wait > 0 {
		if i < n {
			wait += customers[i]
		}
		current := wait
		if current > 4 {
			current = 4
		}

		i++
		wait -= current
		money += current*boardingCost - runningCost
		if money > max {
			max = money
			result = i
		}
	}
	return result

}
