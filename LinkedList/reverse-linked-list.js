/**
 * LeetCode #206 - Reverse Linked List
 * Topic: LinkedList
 * Pattern: In-place Reversal
 *
 * Problem:
 * Given the head of a singly linked list, reverse the list
 * and return the reversed list.
 *
 * Approach: Three Pointer In-place Reversal
 * - Track prev (null), curr (head) and save next before overwriting.
 * - Reverse the link: curr.next = prev.
 * - Move prev to curr, curr to next.
 * - When curr is null, prev is the new head.
 *
 * Time:  O(n) - single pass through the list
 * Space: O(1) - only three pointers used
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
