/**
 * LeetCode #876 - Middle of the Linked List
 * Topic: Linked List
 * Pattern: Fast & Slow Pointer
 *
 * Problem:
 * Given the head of a singly linked list, return the middle node.
 * If there are two middle nodes, return the second middle node.
 *
 * Approach:
 * Use two pointers:
 * - slow moves 1 step
 * - fast moves 2 steps
 * When fast reaches the end, slow will be at the middle.
 *
 * Time: O(n)
 * Space: O(1)
 */

var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};
