function repeatLimitedString(s: string, repeatLimit: number): string {
    const arr = new Array(26).fill(0);
    const aCode = "a".charCodeAt(0);
    let i = 0;
    const n = s.length;
    for (; i < n; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    let result = "";
    let subRepeat = 0; // 记录字串中连续的重复次数
    i = 25;
    while (i >= 0) {
        if (arr[i] === 0) {
            // 当前字符已经用完了 直接下以一个
            i--;
            subRepeat = 0;
        } else if (subRepeat < repeatLimit) {
            // 当前字符未达到重复次数限制 继续使用当前字符
            result += String.fromCharCode(i + aCode);
            arr[i]--;
            subRepeat++;
        } else {
            // 没用完，但是达到了重复次数限制，先插入一个更小的
            // 寻找一个更小的字符
            let next = -1;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > 0) {
                    next = j;
                    break;
                }
            }
            if (next === -1) {
                break;
            }
            // 插入一个更小的字符
            result += String.fromCharCode(next + aCode);
            arr[next]--;
            subRepeat = 1; // 当用了一个更小的之后，重置次数
            if (arr[i] > 0) {
                // 处理当前更大的字符还有，但是达到重复限制了，
                // 我们插入了一个更小的字符，所以更大的字符又可以重新使用了
                subRepeat = 0;
            }
        }
    }
    return result;
};

// console.log(repeatLimitedString("cczazcc", 3));
// console.log(repeatLimitedString("aababab", 2));
// zyzyzyxyxyxyxwxwxwxvxvxuxututststsrsrsrqrqrpopopopopopopononmnmlklkljljljijijijhghghghghfhfefefdfdfcfcbab
var r = repeatLimitedString("bplpcfifosybmjxphbxdltxtfrjspgixoxzbpwrtkopepjxfooazjyosengdlvyfchqhqxznnhuuxhtbrojyhxwlsrklsryvmufoibgfyxgjw", 1)
console.log(r);
console.log('zyzyzyxyxyxyxwxwxwxvxvxuxututststsrsrsrqrqrpopopopopopopononmnmlklkljljljijijijhghghghghfhfefefdfdfcfcbab' === r);
