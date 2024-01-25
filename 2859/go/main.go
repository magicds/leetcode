package main

func sumIndicesWithKSetBits(nums []int, k int) int {
	result, l := 0, len(nums)
	for i := 0; i < l; i++ {
		oneCount, num := 0, i
		for num > 0 {
			num &= num - 1
			oneCount++
		}
		if oneCount == k {
			result += nums[i]
		}
	}
	return result
}

func main() {
	println(sumIndicesWithKSetBits([]int{5, 10, 1, 5, 2}, 1))
	println(sumIndicesWithKSetBits([]int{4, 3, 2, 1}, 2))
}
