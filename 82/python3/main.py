#
# @lc app=leetcode.cn id=82 lang=python3
#
# [82] 删除排序链表中的重复元素 II
#
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        newHead = ListNode(0, head)
        current = newHead
        while current.next and current.next.next:
            if current.next.val == current.next.next.val:
                val = current.next.val
                while current.next and current.next.val == val:
                    current.next = current.next.next
            else:
                current = current.next
        return newHead.next
# @lc code=end

