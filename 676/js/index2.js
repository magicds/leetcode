var MagicDictionary = function () {
    this._data = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    this._data = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    for (let word of this._data) {
        if (word.length !== searchWord.length) continue;
        let diffCount = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== searchWord[i]) diffCount++;
            if (diffCount > 1) break;
        }
        if (diffCount === 1) return true;
    }
    return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

function test(ret, value) {
    console.log(ret);
    if (ret != value) {
        throw new Error('failed test case');
    }
}

var obj = new MagicDictionary();
obj.buildDict(['hello', 'leetcode']);
test(obj.search('hello'), false);

var obj2 = new MagicDictionary();
obj2.buildDict(['hello', 'hallo', 'leetcode']);
test(obj2.search('hello'), true);

test(obj2.search('hhllo'), true);
