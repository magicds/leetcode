var MagicDictionary = function () {
    this._map = new Map();
};

MagicDictionary.prototype._stringToKeys = function (word) {
    const keys = [];
    for (let i = 0; i < word.length; i++) {
        const key = word.slice(0, i) + '*' + word.slice(i + 1);
        keys.push(key);
    }
    return keys;
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    for (let word of dictionary) {
        const keys = this._stringToKeys(word);
        keys.forEach((key) => {
            if (!this._map.has(key)) {
                this._map.set(key, new Set([word]));
            } else {
                const s = this._map.get(key);
                s.add(word);
            }
        });
    }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    const keys = this._stringToKeys(searchWord);
    for (let key of keys) {
        if (this._map.has(key)) {
            const words = this._map.get(key);
            if (words.size == 1 && words.has(searchWord)) {
                continue;
            }
            return true;
        }
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
