/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
    // 找相同的
    const set = new Set(nums1);
    let min = 10;
    for (let it of nums2) {
        if (set.has(it) && it < min) {
            min = it;
        }
    }
    if (min != 10) {
        return min;
    }

    // 不同的
    const min1 = Math.min.apply(null, nums1);
    const min2 = Math.min.apply(null, nums2);
    if (min1 === min2) {
        return min1;
    }
    return min1 > min2 ? min2 * 10 + min1 : min1 * 10 + min2;
};
