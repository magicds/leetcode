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

function bfs(id: number, map: Map<number, Employee>): number {
    const queue = [id];
    let result = 0;

    while (queue.length > 0) {
        const cid = queue.shift();
        const e = map.get(cid);

        result += e.importance;
        queue.push(...e.subordinates);
    }

    return result;
}

function getImportance(employees: Employee[], id: number): number {
    const map = new Map<number, Employee>();
    employees.forEach((employee) => map.set(employee.id, employee));
    return bfs(id, map);
}
