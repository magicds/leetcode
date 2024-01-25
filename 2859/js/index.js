/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function (nums, k) {
    var result = 0;

    for (var i = 0, len = nums.length; i < len; i++) {
        if (i.toString(2).replace(/0/g, "").length === k) {
            result += nums[i];
        }
    }
    return result;
};

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2));
