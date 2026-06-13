/**
 * LeetCode #160 - Intersection of Two Linked Lists
 * Topic: Linked List
 * Pattern: Two Pointers (Pointer Switching)
 *
 * Problem:
 * Given the heads of two singly linked lists,
 * return the node at which the two lists intersect.
 * If the two linked lists have no intersection,
 * return null.
 *
 * Approach:
 * - Use two pointers starting at the heads of both lists.
 * - When a pointer reaches the end of a list,
 *   redirect it to the head of the other list.
 * - After traversing both lists, the pointers
 *   will either meet at the intersection node
 *   or both become null.
 *
 * Time Complexity:  O(m + n)
 * Space Complexity: O(1)
 */
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next;
    nodeB = nodeB === null ? headA : nodeB.next;
  }

  return nodeA;
};
