/**
 * LeetCode #83 - Remove Duplicates from Sorted List
 * Topic: Linked List
 * Pattern: Linked List Traversal
 *
 * Problem:
 * Given the head of a sorted linked list,
 * delete all duplicates such that each element
 * appears only once.
 *
 * Approach:
 * - Traverse the linked list node by node.
 * - If the current node and next node have the same value,
 *   skip the duplicate node.
 * - Otherwise move to the next node.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var deleteDuplicates = function (head) {
  let node = head;

  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  return head;
};
