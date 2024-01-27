function maxNumberOfAlloys(n: number, k: number, budget: number, composition: number[][], stock: number[], cost: number[]): number {
    let left = 1;
    let right = 2 * 10 ** 8;
    let result = 0;

    while (left <= right) {
        let mid = left + (((right - left) / 2) >> 0);
        let ok = false;
        for (let i = 0; i < k; i++) {
            let spend = 0;
            for (let j = 0; j < n; j++) {
                spend +=
                    Math.max(composition[i][j] * mid - stock[j], 0) * cost[j];
            }
            if (spend <= budget) {
                ok = true;
                break;
            }
        }
        if (ok) {
            // 当前满足，尝试更大的
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
};
