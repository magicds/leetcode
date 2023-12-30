func minNumber(nums1 []int, nums2 []int) int {
	min, min1, min2, map1 := 10, 10, 10, make(map[int]bool)

    for _, num := range nums1 {
        map1[num] = true
        if num < min1 {
            min1 = num
        }
    }

    for _, num := range nums2 {
        if map1[num] && num < min {
            min = num
        }
        if num < min2 {
            min2 = num
        }
    }

    if min != 10 {
        return min
    }
    if min1 > min2 {
        return min2 * 10 + min1
    }
    return min1 * 10 + min2
}
