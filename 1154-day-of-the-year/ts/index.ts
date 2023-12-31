var monthDays = [
    31, // Jan
    28, // Feb
    31, // Mar
    30, // Apr
    31, // May
    30, // Jun
    31, // Jul
    31, // Aug
    30, // Sep
    31, // Oct
    30, // Nov
    31 // Dec
];

function dayOfYear(date: string): number {
    var year = parseInt(date.slice(0, 4));
    var month = parseInt(date.slice(5, 7));
    var day = parseInt(date.slice(8));
    // console.log(year, month, day);
    var days = 0;
    for (var i = 0; i < month - 1; i++) {
        days += monthDays[i];
    }

    if (month > 2) {
        var isLeapYear = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
        if (isLeapYear) {
            days += 1;
        }
    }
    days += day;
    return days;
}
