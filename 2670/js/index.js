/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    const result = [];
    const l = nums.length;
    const s = new Set();
    const suffixCountArray = new Array(l + 1).fill(0); // 后缀数目

    for (let i = l - 1; i > 0; i--) {
        s.add(nums[i]);
        suffixCountArray[i] = s.size;
    }
    s.clear();
    for (let i = 0; i < nums.length; i++) {
        s.add(nums[i]);
        result.push(s.size - suffixCountArray[i + 1]);
    }

    return result;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
console.log(distinctDifferenceArray([3, 2, 3, 4, 2]));
