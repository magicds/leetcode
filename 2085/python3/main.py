from collections import Counter

class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        p1, p2 = Counter(words1), Counter(words2)

        result = 0
        for word in p1:
            if p1[word] == 1 and p2[word] == 1:
                result += 1
        return result

