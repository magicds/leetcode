/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function goodNodes(root: TreeNode | null): number {
    function dfs(root, max) {
        if (root === null) {
            return 0;
        }
        let count = 0;
        if (root.val >= max) {
            count++;
            max = root.val;
        }

        count += dfs(root.left, max) + dfs(root.right, max);
        return count;
    }

    return dfs(root, -Infinity);
};
