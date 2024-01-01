/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    var result = -1;
    var wait = 0;
    var max = 0;
    var n = customers.length;
    var money = 0;
    var i = 0;

    while (i < n || wait > 0) {
        wait += i < n ? customers[i] : 0;
        var current = Math.min(wait, 4);
        wait -= current;
        i++;
        money += current * boardingCost - runningCost;
        if (money > max) {
            max = money;
            result = i;
        }
    }
    console.log(max);
    return result;
};

console.log(minOperationsMaxProfit([8, 3], 5, 6));
console.log(minOperationsMaxProfit([10, 9, 6], 6, 4));
console.log(minOperationsMaxProfit([3, 4, 0, 5, 1], 1, 92));
