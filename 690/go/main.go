/**
 * Definition for Employee.
 * type Employee struct {
 *     Id int
 *     Importance int
 *     Subordinates []int
 * }
 */
type Employee struct {
    Id int
    Importance int
    Subordinates []int
}

func dfs(id int, eMap map[int]*Employee) int {
    e := eMap[id]
    result := e.Importance
    for _, subId := range e.Subordinates {
        result += dfs(subId, eMap)
    }
    return result
}

func getImportance(employees []*Employee, id int) int {
    eMap := make(map[int]*Employee)

    for _, e := range employees {
        eMap[e.Id] = e
    }

    return dfs(id, eMap)
}
