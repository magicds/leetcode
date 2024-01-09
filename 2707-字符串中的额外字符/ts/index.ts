/*
 * @lc app=leetcode.cn id=2707 lang=typescript
 *
 * [2707] 字符串中的额外字符
 */

// @lc code=start
class Trie {
    public children: Map<string, Trie> = new Map();
    public isEnd: boolean = false;

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
    insert(word: string): void {
        let node: Trie = this;
        for (let i = 0; i < word.length; i++) {
            const c = word[i];
            if (!node.children.has(c)) {
                node.children.set(c, new Trie());
            }
            node = node.children.get(c);
        }
        node.isEnd = true;
    }
    track(ch: string): Trie | null {
        let node: Trie = this;
        if (node === null) {
            return null;
        }
        return node.children.get(ch) || null;
    }
}

function minExtraChar(s: string, dictionary: string[]): number {
    const n = s.length;
    const d = new Array(n + 1).fill(0);
    const trie = new Trie();
    for (const word of dictionary) {
        trie.insert(word.split("").reverse().join(""));
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
}
// @lc code=end
