class Solution:
    def splitWordsBySeparator(self, words: list[str], separator: str) -> list[str]:
        result = []
        for word in words:
            sub = word.split(separator)
            for it in sub:
                if len(it) > 0:
                    result.append(it)

        return result
