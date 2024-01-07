/*
 * @lc app=leetcode.cn id=2487 lang=javascript
 *
 * [2487] 从链表中移除节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
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

