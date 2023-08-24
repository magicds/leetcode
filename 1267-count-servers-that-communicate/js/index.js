/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let count = 0;

    const rowMap = new Map();
    const colMap = new Map();
    const r = grid.length;
    const c = grid[0].length;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                rowMap.set(i, (rowMap.get(i) || 0) + 1);
                colMap.set(j, (colMap.get(j) || 0) + 1);
            }
        }
    }

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                // 大于1 表示除了自己还有一个
                if (rowMap.get(i) > 1 || colMap.get(j) > 1) {
                    count++;
                }
            }
        }
    }

    return count;
};
console.log(
    countServers([
        [1, 0],
        [0, 1]
    ])
); // 0
console.log(
    countServers([
        [1, 0],
        [1, 1]
    ])
); // 3
console.log(
    countServers([
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1]
    ])
); // 4
