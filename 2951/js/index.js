/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (mountain) {
    const n = mountain.length;
    if (n <= 2) {
        return [];
    }
    const result = [];

    let prev;
    let curr;
    let next;
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
