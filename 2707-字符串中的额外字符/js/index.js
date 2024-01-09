/*
 * @lc app=leetcode.cn id=2707 lang=javascript
 *
 * [2707] 字符串中的额外字符
 */

// @lc code=start

// 简单的字典树
const A_CODE = "a".charCodeAt(0);

class Trie {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }

    insert(word) {
        let node = this;
        for (let ch of word) {
            let index = ch.charCodeAt(0) - A_CODE;
            if (node.children[index] === null) {
                node.children[index] = new Trie();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    track(ch) {
        let node = this;
        let index = ch.charCodeAt(0) - A_CODE;
        if (node === null || node.children[index] === null) {
            return null;
        }
        node = node.children[index];
        return node;
    }
}

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const n = s.length;
    const d = new Array(n + 1).fill(0);
    const trie = new Trie();
    for (let word of dictionary) {
        const reversed = word.split("").reverse().join("");
        trie.insert(reversed);
    }
    for (let i = 1; i <= n; i++) {
        d[i] = d[i - 1] + 1;
        let node = trie;
        for (let j = i - 1; j >= 0; j--) {
            if (node === null) {
                break;
            }
            node = node.track(s[j]);
            if (node != null && node.isEnd) {
                d[i] = Math.min(d[i], d[j]);
            }
        }
    }
    return d[n];
};

// @lc code=end
