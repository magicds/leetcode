class MagicDictionary:

    def __init__(self):
        self.data = list()


    def buildDict(self, dictionary: list[str]) -> None:
        self.data = dictionary


    def search(self, searchWord: str) -> bool:
        for word in self.data:
            if len(word)!= len(searchWord):
                continue
            count = 0
            for i in range(len(word)):
                if word[i]!= searchWord[i]:
                    count += 1
                if count > 1:
                    break
            if count==1:
                return True
        return False



# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary()
# obj.buildDict(dictionary)
# param_2 = obj.search(searchWord)
