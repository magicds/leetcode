function sumIndicesWithKSetBits(nums: number[], k: number): number {
    let result = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        // if (i.toString(2).replace(/0/g, "").length === k) {
        //     result += nums[i];
        // }
        // 基于Brian Kernighan算法 计算1的个数
        // 对于任意的二进制数n，n和n-1进行AND操作会将n最右边的1变为0
        let count = 0;
        let n = i;
        while (n) {
            n &= n - 1;
            count++;
        }
        if (count === k) {
            result += nums[i];
        }
    }
    return result;
}

console.log(sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1));
console.log(sumIndicesWithKSetBits([4, 3, 2, 1], 2));
