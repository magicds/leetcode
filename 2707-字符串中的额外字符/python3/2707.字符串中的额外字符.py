#
# @lc app=leetcode.cn id=2707 lang=python3
#
# [2707] 字符串中的额外字符
#

# @lc code=start
class Trie:
    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False
    def insert(self, word):
        node = self
        for c in word:
            i = ord(c) - ord('a')
            if node.children[i] == None:
                node.children[i] = Trie()
            node = node.children[i]
        node.isEnd = True
    def track(self, node, ch):
        k = ord(ch) - ord('a')
        if node == None or node.children[k] == None:
            return None, False
        node = node.children[k]
        return node, node.isEnd

class Solution:
    def minExtraChar(self, s: str, dictionary: list[str]) -> int:
        n = len(s)
        d = [0 ] * (n + 1)
        trie = Trie()
        for word in dictionary:
            trie.insert(reversed(word))

        for i in range(1, n+1):
            d[i] = d[i-1 ] + 1
            node = trie
            for j in range(i-1,-1,-1):
                node, end = trie.track(node, s[j])
                if end:
                    d[i] = min(d[i], d[j])

        return d[n]

# @lc code=end

