function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: Record<string, number> = {};
    let n = magazine.length;
    let c;
    for (let i = 0; i < n; i++) {
        c = magazine[i];
        if (map[c]) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }
    n = ransomNote.length;
    for (let i = 0; i < n; i++) {
        c = ransomNote[i];
        if (!map[c]) {
            return false;
        } else {
            map[c]--;
        }
    }
    return true;
}
