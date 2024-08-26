/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function dfs(id: number, map: Map<number, Employee>): number {
    const e = map.get(id);
    let result = e.importance;
    for (const sub of e.subordinates) {
        result += dfs(sub, map);
    }
    return result;
}

function getImportance(employees: Employee[], id: number): number {
    const map = new Map<number, Employee>();
    employees.forEach((employee) => map.set(employee.id, employee));
    return dfs(id, map);
}
