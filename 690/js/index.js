/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
// DFS


function dfs(id, map) {
    const it = map.get(id);
    let result = it.importance;
    it.subordinates.forEach((subordinate) => {
        result += dfs(subordinate, map);
    });
    return result;
}
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    const map = new Map();
    employees.forEach((employee) => {
        map.set(employee.id, employee);
    });

    return dfs(id, map);
};
