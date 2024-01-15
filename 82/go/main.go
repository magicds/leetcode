/*
 * @lc app=leetcode.cn id=82 lang=golang
 *
 * [82] 删除排序链表中的重复元素 II
 */
type ListNode struct {
	Val  int
	Next *ListNode
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	newHead := &ListNode{Next: head}
	cur, val := newHead, 0
	for cur.Next != nil && cur.Next.Next != nil {
		if cur.Next.Val == cur.Next.Next.Val {
			val = cur.Next.Val
			for cur.Next != nil && cur.Next.Val == val {
				cur.Next = cur.Next.Next
			}
		} else {
			cur = cur.Next
		}
	}
	return newHead.Next
}

// @lc code=end

