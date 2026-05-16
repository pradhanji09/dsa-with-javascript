/**
 * LeetCode #142 - Linked List Cycle II
 * Topic: Linked List
 * Pattern: Fast & Slow Pointers (Floyd’s Cycle Detection)
 *
 * Problem:
 * Given the head of a linked list,
 * return the node where the cycle begins.
 * If there is no cycle, return null.
 *
 * Approach: Floyd’s Cycle Detection
 * - Use slow and fast pointers to detect cycle.
 * - If pointers meet, reset one pointer to head.
 * - Move both pointers one step at a time.
 * - The node where they meet again
 *   is the cycle starting node.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(1) - constant extra space
 */
var detectCycle = function (head) {
  let p1 = head;
  let p2 = head;

  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      p1 = head;

      while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }

      return p1;
    }
  }

  return null;
};
