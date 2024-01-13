# 2182. 构造限制重复的字符串

> Problem: [2182. 构造限制重复的字符串](https://leetcode.cn/problems/construct-string-with-repeat-limit/description/)


[TOC]

## 思路

**要让输出字符串的字典序更大，也就是让字典序大的字母尽可能的在前面，也就是重组的时候我们要有限使用更大的字符。**

1. 首先需要统计给的字符及其数目
2. 由于需要字典序需要最大，使用这些字符的时候我们从最大的开始用
3. 用的过程中检查是否超过了最大字符数目的限制
4. 重点是 3 当达到最大限制后，开始我就直接使用下一个字符了。但这其实不对，题设中强调的是**连续**。 因此当达到重复数目限制后，我们可以插入一个稍小的字符后继续使用当前字符，直到用完。

## 解题方法

解法就是就是上面的解题思路了。

第一步首先得到输出字符串的字符计数，由于需要字典序，就不要使用map了，直接数组即可，下标为 Unicode 和 `a` 的偏移，值为计数。 这可以方便后续直接按字典序来使用字符。

接下来就可以进行字符的拼接了，从第一步中的统计倒序开始，优先使用最大的。按照下面的逻辑进行循环即可：

1. 如果没有，切换到一个更小的字符。
2. 存在的情况下，检查是否超过连续重复的限制，未超过则添加当前字符，更新连续的计数，字符用掉一个也做同步扣减。
3. 当当前字符达到限制了，不能直接切换到更小的字符，而是可以先插入一个稍小的字符，然后我们就可以继续使用当前这个字符，这样的既满足了字典序尽可能大，又符合题设的**连续的字符**不超过限制。

## 复杂度

时间复杂度:
> 添加时间复杂度, 示例： $O(n)$

空间复杂度:
> 添加空间复杂度, 示例： $O(n)$

## Code

```javascript []
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    const arr = new Array(26).fill(0);
    const aCode = "a".charCodeAt(0);
    let i = 0;
    const n = s.length;
    for (; i < n; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    let result = "";
    let subRepeat = 0; // 记录字串中连续的重复次数
    i = 25;
    while (i >= 0) {
        if (arr[i] === 0) {
            // 当前字符已经用完了 直接下以一个
            i--;
            subRepeat = 0;
        } else if (subRepeat < repeatLimit) {
            // 当前字符未达到重复次数限制 继续使用当前字符
            result += String.fromCharCode(i + aCode);
            arr[i]--;
            subRepeat++;
        } else {
            // 没用完，但是达到了重复次数限制，先插入一个更小的
            // 寻找一个更小的字符
            let next = -1;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > 0) {
                    next = j;
                    break;
                }
            }
            if (next === -1) {
                break;
            }
            // 插入一个更小的字符
            result += String.fromCharCode(next + aCode);
            arr[next]--;
            subRepeat = 1; // 当用了一个更小的之后，重置次数
            if (arr[i] > 0) {
                // 处理当前更大的字符还有，但是达到重复限制了，
                // 我们插入了一个更小的字符，所以更大的字符又可以重新使用了
                subRepeat = 0;
            }
        }
    }
    return result;
};
```

```TypeScript []
function repeatLimitedString(s: string, repeatLimit: number): string {
    const arr = new Array(26).fill(0);
    const aCode = "a".charCodeAt(0);
    let i = 0;
    const n = s.length;
    for (; i < n; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    let result = "";
    let subRepeat = 0; // 记录字串中连续的重复次数
    i = 25;
    while (i >= 0) {
        if (arr[i] === 0) {
            // 当前字符已经用完了 直接下以一个
            i--;
            subRepeat = 0;
        } else if (subRepeat < repeatLimit) {
            // 当前字符未达到重复次数限制 继续使用当前字符
            result += String.fromCharCode(i + aCode);
            arr[i]--;
            subRepeat++;
        } else {
            // 没用完，但是达到了重复次数限制，先插入一个更小的
            // 寻找一个更小的字符
            let next = -1;
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] > 0) {
                    next = j;
                    break;
                }
            }
            if (next === -1) {
                break;
            }
            // 插入一个更小的字符
            result += String.fromCharCode(next + aCode);
            arr[next]--;
            subRepeat = 1; // 当用了一个更小的之后，重置次数
            if (arr[i] > 0) {
                // 处理当前更大的字符还有，但是达到重复限制了，
                // 我们插入了一个更小的字符，所以更大的字符又可以重新使用了
                subRepeat = 0;
            }
        }
    }
    return result;
}
```

```Go []
import (
	"strings"
)

func repeatLimitedString(s string, repeatLimit int) string {
	arr := make([]int, 26)
	for _, c := range s {
		arr[c-'a']++
	}
	var result strings.Builder
	i, subRepeat := 25, 0

	for i >= 0 {
		if arr[i] == 0 {
			i--
			subRepeat = 0
		} else if subRepeat < repeatLimit {
			result.WriteRune('a' + rune(i))
			subRepeat++
			arr[i]--
		} else {
			next := -1
			for j := i - 1; j >= 0; j-- {
				if arr[j] > 0 {
					next = j
					break
				}
			}
			if next == -1 {
				break
			}
			result.WriteRune('a' + rune(next))
			arr[next]--
			subRepeat = 1
			if arr[i] > 0 {
				subRepeat = 0
			}
		}
	}
	return result.String()
}
```

```Python []
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
```

