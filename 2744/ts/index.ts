function maximumNumberOfStringPairs(words: string[]): number {
    const map: Map<string, number> = new Map();
    const len = words.length;
    let result = 0;
    let word, reversedWord;
    for (let i = 0; i < len; i++) {
        word = words[i];
        reversedWord = word[1] + word[0];
        if (map.has(reversedWord)) {
            result++;
        }
        map.set(word, 1);
    }
    return result;
}
