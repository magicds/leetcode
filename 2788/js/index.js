/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    const result = [];
    let item;
    for (const word of words) {
        item = "";
        const len = word.length;
        for (let i = 0; i < len; i++) {
            if (word[i] === separator) {
                if (item) {
                    result.push(item);
                    item = "";
                }
            } else {
                item += word[i];
            }
        }
        if (item) {
            result.push(item);
        }
    }
    return result;
};

console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
