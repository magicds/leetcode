class Solution:
    def maximumSwap(self, num: int) -> int:
        arr = list(str(num))
        n = len(arr)
        maxIndex, index1, index2 = n - 1, -1, -1
        for i in range(n - 1, -1, -1):
            if arr[i] > arr[maxIndex]:
                maxIndex = i
            elif arr[i] < arr[maxIndex]:
                index1, index2 = i, maxIndex
        if index1 >= 0:
            arr[index1], arr[index2] = arr[index2], arr[index1]
            return int("".join(arr))
        return num
