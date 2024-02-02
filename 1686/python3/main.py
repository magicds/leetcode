class Solution:
    def stoneGameVI(self, aliceValues: list[int], bobValues: list[int]) -> int:
        n = len(aliceValues)
        commonValues = [0] * n
        for i in range(n):
            commonValues[i] = [
                aliceValues[i] + bobValues[i],
                aliceValues[i],
                bobValues[i],
            ]
        commonValues.sort(reverse=True)
        aliceScore = 0
        bobScore = 0
        for i in range(n):
            if i & 1 == 0:
                aliceScore += commonValues[i][1]
            else:
                bobScore += commonValues[i][2]
        return 0 if aliceScore == bobScore else 1 if aliceScore > bobScore else -1
