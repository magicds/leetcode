function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words
        .reduce((total, word) => {
            total.push(...word.split(separator));
            return total;
        }, [])
        .filter((word) => !!word);
}
