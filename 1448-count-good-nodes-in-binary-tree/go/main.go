/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func goodNodes(root *TreeNode) int {
    return dfs(root, -100000)
}

func dfs(root *TreeNode, max int) int {
    if root == nil {
        return 0
    }
    count := 0
    if root.Val >= max {
        count++
        max = root.Val
    }

    count += dfs(root.Left, max) + dfs(root.Right, max)
    return count;
}
