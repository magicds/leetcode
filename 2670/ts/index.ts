function distinctDifferenceArray(nums: number[]): number[] {
    const result: number[] = [];
    const l = nums.length;
    const s: Set<number> = new Set();
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
}
