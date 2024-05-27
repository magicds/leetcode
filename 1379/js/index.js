/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    if (original == null) {
        return null;
    }
    if (original == target) {
        return cloned;
    }
    // 深度优先递归 左分支一直走到死看有没有
    var left = getTargetCopy(original.left, cloned.left, target);
    if (left != null) {
        return left;
    }
    // 没有看再看右边
    return getTargetCopy(original.right, cloned.right, target);
};
