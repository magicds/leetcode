func insert(intervals [][]int, newInterval []int) [][]int {
    left, right := newInterval[0], newInterval[1]
    inserted := false
    ans := make([][]int, 0)

    // 找到重叠的部分
    for _, interval := range intervals {
        // 当前区间完全在要插入的区间的右边 当前区间直接加入
        if interval[0] > right {
            // 因为要将区间插入到最前面 要保障有序 可以立即插入并用一个变量标记是否插入过了
            if !inserted {
                ans = append(ans, []int{left, right})
                inserted = true
            }
            ans = append(ans, interval)
        } else if interval[1] < left {
            // 当前处理的区间 完全在要插入的区间的右边 直接加入
            ans = append(ans, interval)
        } else {
            // 当前区间和要插入的区间是重叠的 计算交集
            left = min(left, interval[0])
            right = max(right, interval[1])
        }
    }
    if !inserted {
        ans = append(ans, []int{left, right})
    }

    return ans
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
