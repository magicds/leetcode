class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        n = 26
        arr , aCode= [0] * n, ord('a')
        for c in s:
            arr[ord(c) - aCode] += 1

        result, subRepeat,i = [], 0, n-1
        while i>=0 :
            if arr[i] == 0:
                #  当前字符已经用完了 直接下以一个
                i -= 1
                subRepeat = 0
                continue
            elif subRepeat < repeatLimit:
                # 当前字符未达到重复次数限制 继续使用当前字符
                result.append(chr(i + aCode))
                arr[i] -= 1
                subRepeat += 1
            else:
                # 没用完，但是达到了重复次数限制，先插入一个更小的字符
                nextIndex = -1
                for j in range(i-1, -1, -1):
                    if arr[j] > 0:
                        nextIndex = j
                        break
                if nextIndex == -1:
                    break
                # do insert
                result.append(chr(nextIndex + aCode))
                arr[nextIndex] -= 1
                subRepeat = 1
                if arr[i] > 0:
                    # 当插入一个更小的字符后，已经不受重复次数限制了，可以继续使用当前字符
                    subRepeat = 0
        return ''.join(result)
