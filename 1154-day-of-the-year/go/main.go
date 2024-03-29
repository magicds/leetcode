func dayOfYear(date string) int {
	year, _ := strconv.Atoi(date[:4])
	month, _ := strconv.Atoi(date[5:7])
	day, _ := strconv.Atoi(date[8:])
	monthDays := []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

	for i := 0; i < month-1; i++ {
		day += monthDays[i]
	}
	if month > 2 && (year%400 == 0 || (year%4 == 0 && year%100 != 0)) {
		day++
	}
	return day
}
