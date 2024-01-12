function countWords(words1: string[], words2: string[]): number {
    const map1 = new Map();
    const map2 = new Map();
    let i = 0,
        n = words1.length;

    for (; i < n; i++) {
        map1.set(words1[i], (map1.get(words1[i]) || 0) + 1);
    }
    for (i = 0, n = words2.length; i < n; i++) {
        map2.set(words2[i], (map2.get(words2[i]) || 0) + 1);
    }

    let result = 0;
    for (const [key, value] of map1.entries()) {
        if (value === 1 && map2.get(key) === 1) {
            result++;
        }
    }
    return result;
}
