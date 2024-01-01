function minOperationsMaxProfit(
    customers: number[],
    boardingCost: number,
    runningCost: number
): number {
    var result = -1;
    var wait = 0;
    var max = 0;
    var n = customers.length;
    var money = 0;
    var i = 0;

    while (i < n || wait > 0) {
        wait += i < n ? customers[i] : 0;
        var current: number = Math.min(wait, 4);
        wait -= current;
        i++;
        money += current * boardingCost - runningCost;
        if (money > max) {
            max = money;
            result = i;
        }
    }
    return result;
}
