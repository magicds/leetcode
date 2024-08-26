"""
# Definition for Employee.
class Employee:
    def __init__(self, id: int, importance: int, subordinates: List[int]):
        self.id = id
        self.importance = importance
        self.subordinates = subordinates
"""

class Solution:
    def dfs(self, id: int, employeeMap:dict) -> int:
        e = employeeMap[id]
        result  = e.importance

        for subordinate in e.subordinates:
            result += self.dfs(subordinate, employeeMap)

        return result

    def getImportance(self, employees: list['Employee'], id: int) -> int:
        # 构建map
        employeeMap = {e.id: e for e in employees}
        return self.dfs(id, employeeMap)
