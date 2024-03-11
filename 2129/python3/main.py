class Solution:
    def capitalizeTitle(self, title: str) -> str:
        arr = []
        for word in title.split(' '):
            if len(word) <= 2:
                arr.append(word.lower())
            else:
                arr.append(word[0].upper() + word[1:].lower())
        return ' '.join(arr)
