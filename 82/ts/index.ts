/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    var newHead = new ListNode(0, head);
    var current = newHead;
    var val = 0;
    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            // 需要删除
            val = current.next.val;
            while (current.next && current.next.val === val) {
                // 删除
                current.next = current.next.next;
            }
        } else {
            // 向后移动
            current = current.next;
        }
    }
    return newHead.next;
}
// @lc code=end
