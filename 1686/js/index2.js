/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
    let scoreA = 0;
    let scoreB = 0;
    const n = aliceValues.length;

    // 记录双方都认可的value的值，以及对应的alice和bob的值 再降序排序
    const commonValues = aliceValues.map((a, i) => {
        const b = bobValues[i];
        return [a + b, a, b];
    });
    commonValues.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < n; i++) {
        if ((i & 1) === 0) {
            scoreA += commonValues[i][1];
        } else {
            scoreB += commonValues[i][2];
        }
    }

    return scoreA == scoreB ? 0 : scoreA > scoreB ? 1 : -1;
};

console.log(stoneGameVI([1, 3], [2, 1]), "Expected: 1");
console.log(stoneGameVI([1, 2], [3, 1]), "Expected: 0");
console.log(stoneGameVI([2, 4, 3], [1, 6, 7]), "Expected: -1");
console.log(stoneGameVI([9, 8, 3, 8], [10, 6, 9, 5]), "Expected: 1");
