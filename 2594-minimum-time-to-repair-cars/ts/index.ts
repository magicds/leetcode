function repairCars(ranks: number[], cars: number): number {
    let left = 1;
    let right = ranks[0] * cars * cars;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        // 中间的时间能完成，则缩小右边界，否则左边界+1
        if (isDone(mid, ranks, cars)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

// t = r * n * n => n * n = t / r
function isDone(t: number, ranks: number[], cars: number) {
    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
        count += Math.floor(Math.sqrt(t / ranks[i]));
    }

    return count >= cars;
}
