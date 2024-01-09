/*
 * @lc app=leetcode.cn id=2707 lang=golang
 *
 * [2707] 字符串中的额外字符
 */

// @lc code=start
type Trie struct {
	children []*Trie
	isEnd    bool
}

func NewTrie() *Trie {
	return &Trie{
		children: make([]*Trie, 26),
		isEnd:    false,
	}
}
func insert(node *Trie, word string) {
	n := len(word)
	for i := n - 1; i >= 0; i-- {
		ch := word[i] - 'a'
		if node.children[ch] == nil {
			node.children[ch] = NewTrie()
		}
		node = node.children[ch]
	}
	node.isEnd = true
}
func track(node *Trie, ch byte) (*Trie, bool) {
	if node == nil || node.children[ch-'a'] == nil {
		return nil, false
	}
	node = node.children[ch-'a']
	return node, node.isEnd
}

func minExtraChar(s string, dictionary []string) int {
	n := len(s)
	d := make([]int, n+1)
	trie := NewTrie()
	for _, v := range dictionary {
		// insert 已经为此处实现为反向插入
		insert(trie, v)
	}
	for i := 1; i <= n; i++ {
		d[i] = d[i-1] + 1
		node := trie
		for j := i - 1; j >= 0; j-- {
			var ok bool
			node, ok = track(node, s[j])
			if ok {
				d[i] = min(d[i], d[j])
			}
		}
	}
	return d[n]
}
// @lc code=end

