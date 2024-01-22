/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    var strArr = String(num).split("");
    var maxDig = 0;
    var len = strArr.length;
    var maxDig = strArr[len - 1];
    var maxDigIndex = len - 1;
    var index1 = -1; // 最小的数字的索引
    var index2 = -1; // 最小数字右侧的最大数字的索引
    for (let i = len - 1; i >= 0; i--) {
        if (strArr[i] > maxDig) {
            maxDig = strArr[i];
            maxDigIndex = i;
        } else if (strArr[i] < maxDig) {
            // 在前面即左侧 出现了更小的数字 需要交换
            index1 = i;
            index2 = maxDigIndex;
        }
    }
    if (index1 >= 0) {
        var temp = strArr[index1];
        strArr[index1] = strArr[index2];
        strArr[index2] = temp;
        return parseInt(strArr.join(""), 10);
    }
    return num;
};

console.log("2736 -> 7236", maximumSwap(2736));
console.log("9973 -> 9973", maximumSwap(9973));
console.log("98368 -> 98863", maximumSwap(98368));
