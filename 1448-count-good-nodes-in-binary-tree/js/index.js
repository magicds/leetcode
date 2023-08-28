/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
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
