/**
 * LeetCode #141 - Linked List Cycle
 * Topic: Linked List
 * Pattern: Fast & Slow Pointers (Floyd’s Cycle Detection)
 *
 * Problem:
 * Given head, the head of a linked list,
 * determine if the linked list has a cycle.
 *
 * Approach: Fast & Slow Pointers
 * - Use two pointers moving at different speeds.
 * - Slow pointer moves one step at a time.
 * - Fast pointer moves two steps at a time.
 * - If pointers meet, cycle exists.
 * - If fast reaches null, no cycle exists.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(1) - constant extra space
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    if (fast) slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
