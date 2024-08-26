/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */
// DFS 带缓存

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

    // 缓存计算结果
    const cacheMap = new Map();

    function dfs(id, map) {
        if (cacheMap.has(id)) return cacheMap.get(id);

        const it = map.get(id);
        let result = it.importance;
        it.subordinates.forEach((subordinate) => {
            result += dfs(subordinate, map);
        });
        cacheMap.set(id, result);
        return result;
    }

    return dfs(id, map);
};
