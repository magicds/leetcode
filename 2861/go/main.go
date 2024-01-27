func maxNumberOfAlloys(n int, k int, budget int, composition [][]int, stock []int, cost []int) int {
    left, right, result := 1, int(2 * 10e8), 0

    for left <= right {
        mid, ok := left + ((right - left) >> 1), false

        for i:=0; i<k; i++ {
            spend := 0
            for j:=0; j<n; j++ {
                cost := (composition[i][j] * mid - stock[j]) * cost[j]
                if cost > 0 {
                    spend += cost
                }
            }
            if (spend <= budget) {
                ok = true
                break
            }
        }
        if (ok ) {
            result = mid
            left = mid + 1
        } else {
            right = mid - 1
        }

    }
    return result
}
