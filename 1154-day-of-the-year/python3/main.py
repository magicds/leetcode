class Solution:
    def dayOfYear(self, date: str) -> int:
        year, month,day = map(int, date.split('-'))
        monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
        if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
            monthDays[1] = 29
        return sum(monthDays[:month-1]) + day
