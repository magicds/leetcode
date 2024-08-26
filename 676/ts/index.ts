class MagicDictionary {
    private _data: string[];
    constructor() {
        this._data = [];
    }

    buildDict(dictionary: string[]): void {
        this._data = dictionary;
    }

    search(searchWord: string): boolean {
        for (let word of this._data) {
            if (word.length !== searchWord.length) continue;
            let diffCount = 0;
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== searchWord[i]) diffCount++;
                if (diffCount > 1) break;
            }
            if (diffCount === 1) return true;
        }
        return false;
    }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
