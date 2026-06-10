/**
 * LeetCode #21 - Merge Two Sorted Lists
 * Topic: Linked List
 * Pattern: Two Pointers
 *
 * Problem:
 * Merge two sorted linked lists and return
 * the merged sorted linked list.
 *
 * Approach: Two Pointers
 * - Use a dummy node to simplify list construction.
 * - Compare current nodes from both lists.
 * - Attach the smaller node to the merged list.
 * - Append the remaining nodes after one list is exhausted.
 *
 * Time Complexity:  O(n + m) - traverse both lists once
 * Space Complexity: O(1) - reuses existing nodes
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let currNode = dummy;
  let p1 = list1;
  let p2 = list2;

  while (p1 && p2) {
    if (p1.val >= p2.val) {
      currNode.next = p2;
      p2 = p2.next;
    } else {
      currNode.next = p1;
      p1 = p1.next;
    }

    currNode = currNode.next;
  }

  if (p1) {
    currNode.next = p1;
  } else if (p2) {
    currNode.next = p2;
  }

  return dummy.next;
};
