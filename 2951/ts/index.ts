function findPeaks(mountain: number[]): number[] {
    const n = mountain.length;
    if (n <= 2) {
        return [];
    }
    const result = [];

    let prev: number;
    let curr: number;
    let next: number;
    for (let i = 1; i < n - 1; i++) {
        prev = mountain[i - 1];
        curr = mountain[i];
        next = mountain[i + 1];
        if (curr > prev && curr > next) {
            result.push(i);
        }
    }
    return result;
};
