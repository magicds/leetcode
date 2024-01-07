/*
 * @lc app=leetcode.cn id=2487 lang=typescript
 *
 * [2487] 从链表中移除节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNodes(head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    head.next = removeNodes(head.next);
    if (head.next != null && head.val < head.next.val) {
        return head.next;
    } else {
        return head;
    }
};
// @lc code=end

