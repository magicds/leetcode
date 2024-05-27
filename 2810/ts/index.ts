function finalString(s: string): string {
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
}
