/**
 * 暴力解法，会超时
 * 分析： getMax 中每次都需要再循环，但实际上计算逻辑是一样的，可以一次计算后排序
 */

/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
    let scoreA = 0;
    let scoreB = 0;
    const n = aliceValues.length;
    for (let i = 0; i < n; i++) {
        if ((i & 1) === 0) {
            scoreA += getMax(aliceValues, bobValues);
        } else {
            scoreB += getMax(bobValues, aliceValues);
        }
    }

    return scoreA == scoreB ? 0 : scoreA > scoreB ? 1 : -1;
};

function getMax(arr1, arr2) {
    const n = arr1.length;
    let max = -Number.MAX_VALUE;
    let maxIndex = -1;
    let v;
    for (let i = 0; i < n; i++) {
        // 我的最大 也要抢占你的最大
        v = arr1[i] + arr2[i];
        if (v > max) {
            max = v;
            maxIndex = i;
        }
    }
    // console.log(maxIndex);
    arr2.splice(maxIndex, 1);
    return arr1.splice(maxIndex, 1)[0];
}


console.log(stoneGameVI([1, 3], [2, 1]), "Expected: 1");
console.log(stoneGameVI([1, 2], [3, 1]), "Expected: 0");
console.log(stoneGameVI([2, 4, 3], [1, 6, 7]), "Expected: -1");
console.log(stoneGameVI([9, 8, 3, 8], [10, 6, 9, 5]), "Expected: 1");
