function insert(intervals: number[][], newInterval: [number, number]): number[][] {
    let [left, right] = newInterval;
    let inserted = false;
    const result = [];

    // 找到重叠的部分
    for (let interval of intervals) {
        // 当前区间完全在要插入的区间的右边 当前区间直接加入
        if (interval[0] > right) {
            // 因为要将区间插入到最前面 要保障有序 可以立即插入并用一个变量标记是否插入过了
            if (!inserted) {
                result.push([left, right]);
                inserted = true;
            }
            result.push(interval);
        } else if (interval[1] < left) {
            // 当前处理的区间 完全在要插入的区间的右边 直接加入
            result.push(interval);
        } else {
            // 当前区间和要插入的区间是重叠的 计算交集
            left = Math.min(left, interval[0]);
            right = Math.max(right, interval[1]);
        }
    }
    if (!inserted) {
        result.push([left, right]);
    }

    return result;
};
