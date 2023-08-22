/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats:number[]):number {
    const n = seats.length;
    let i = 0,
        j = 0;
    let max = 0;
    while (i < n) {
        // i 左边第一个人
        if (seats[i] === 1) {
            break;
        }
        i++;
    }
    max = i; // 左边的有空位的话的距离

    while (i < n) {
        j = i + 1;
        // 向右找到下一个人
        while (j < n && seats[j] === 0) {
            j++;
        }
        if (j === i + 1) {
            i = j;
            continue;
        }
        // console.log('between', i, j);
        if (j < n) {
            // 两人之间
            max = Math.max(max, Math.floor((j - i) / 2));
        } else {
            // 最后一段
            max = Math.max(max, j - i - 1);
        }
        i = j;
    }
    return max;
};

console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]));
console.log(maxDistToClosest([1, 0, 0, 0]));
console.log(maxDistToClosest([0, 1]));
