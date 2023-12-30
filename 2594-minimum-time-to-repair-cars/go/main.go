package main

import "math"

func repairCars(ranks []int, cars int) int64 {
	left, right := 0, 0
	right = ranks[0] * cars * cars
	for left < right {
		mid := (left + right) / 2
		if isDone(mid, ranks, cars) {
			right = mid
		} else {
			left = mid + 1
		}
	}
	return int64(left)
}

func isDone(t int, ranks []int, cars int) bool {
	count := 0
	for _, rank := range ranks {
		count += int(math.Sqrt(float64(t / rank)))
		if count >= cars {
			return true
		}
	}
	return count >= cars
}
