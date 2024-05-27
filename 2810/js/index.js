/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    // var arr = [];
    // for (var i = 0; i < s.length; i++) {
    //     if (s[i] === "i") {
    //         arr = arr.reverse();
    //     } else {
    //         arr.push(s[i]);
    //     }
    // }
    // return arr.join("");
    // 输入 i 时
    // 反转现有字符串 = 不反转，但是给前面添加
    var arr = [];
    var reverse = false;
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c === "i") {
            reverse = !reverse;
        } else {
            if (reverse) {
                arr.unshift(c);
            } else {
                arr.push(c);
            }
        }
    }
    return reverse ? arr.reverse().join("") : arr.join("");
};
