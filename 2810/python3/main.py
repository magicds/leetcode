from collections import deque


class Solution:
    def finalString(self, s: str) -> str:
        arr = deque()
        appendToHead = False
        for c in s:
            if c == "i":
                appendToHead = not appendToHead
            else:
                if appendToHead:
                    arr.appendleft(c)
                else:
                    arr.append(c)
        if appendToHead:
            arr.reverse()
        return "".join(arr)


s = Solution()
print(s.finalString('string'))
