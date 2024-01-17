class Solution:
    def maximumNumberOfStringPairs(self, words: list[str]) -> int:
        m = {}
        result = 0
        for word in words:
            rd = word[1] + word[0]
            if m.get(rd) == 1:
                result += 1
            m[word] = 1
        return result
