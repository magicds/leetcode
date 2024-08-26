/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
// BFS

function bfs(id, map) {
    const queue = [id];
    let result = 0;
    while (queue.length > 0) {
        const cid = queue.shift();
        const it = map.get(cid);
        result += it.importance;

        queue.push(...it.subordinates);
    }
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

    return bfs(id, map);
};
