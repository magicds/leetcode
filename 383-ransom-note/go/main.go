func canConstruct(ransomNote string, magazine string) bool {
    m := make(map[rune]int)
    for _, r := range magazine {
        m[r]++
    }
    for _, r := range ransomNote {
        if m[r] == 0 {
            return false
        }
        m[r]--
    }
    return true
}
