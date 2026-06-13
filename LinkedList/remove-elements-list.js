/**
 * LeetCode #203 - Remove Linked List Elements
 * Topic: Linked List
 * Pattern: Linked List Traversal + Dummy Node
 *
 * Problem:
 * Remove all nodes from the linked list that have
 * Node.val == val and return the new head.
 *
 * Approach:
 * - Create a dummy node pointing to the head.
 * - Traverse the list using the dummy node.
 * - If the next node contains the target value,
 *   skip it by updating pointers.
 * - Return dummy.next as the new head.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var removeElements = function (head, val) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let node = dummy;

  while (node && node.next) {
    if (node.next.val === val) {
      node.next = node.next.next;
      continue;
    }
    node = node.next;
  }

  return dummy.next;
};
