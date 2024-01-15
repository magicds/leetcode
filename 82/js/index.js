/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
ListNode.prototype.toString = function () {
    var arr = [];
    var head = this;
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return JSON.stringify(arr);
};
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
var deleteDuplicates = function (head) {
    // 有可能最开始的节点就存在重复，方便代码统一循环，添加一个新的节点
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
};
// @lc code=end

function arr2list(arr) {
    var head = new ListNode();
    var current = head;
    for (var i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head.next;
}
function print(head) {
    var arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

console.log(deleteDuplicates(arr2list([1, 2, 3, 3, 4, 4, 5])));
