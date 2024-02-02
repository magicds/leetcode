function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
    let scoreA = 0;
    let scoreB = 0;
    const n = aliceValues.length;

    // 记录双方都认可的value的值，以及对应的alice和bob的值 再降序排序
    const commonValues = aliceValues.map((a, i) => {
        const b = bobValues[i];
        return [a + b, a, b];
    });
    commonValues.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < n; i++) {
        if ((i & 1) === 0) {
            scoreA += commonValues[i][1];
        } else {
            scoreB += commonValues[i][2];
        }
    }

    return scoreA == scoreB ? 0 : scoreA > scoreB ? 1 : -1;
};
