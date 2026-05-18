/**
 * LeetCode #234 - Palindrome Linked List
 * Topic: Linked List
 * Pattern: Fast & Slow Pointers + In-place Reversal
 *
 * Problem:
 * Given the head of a singly linked list,
 * return true if it is a palindrome,
 * otherwise return false.
 *
 * Approach:
 * - Find middle of linked list using
 *   fast and slow pointers.
 * - Reverse second half of list in-place.
 * - Compare first half with reversed second half.
 *
 * Time Complexity:  O(n) - single traversal operations
 * Space Complexity: O(1) - in-place reversal
 */
var isPalindrome = function (head) {
  let p1 = head;
  let p2 = head;

  // --- PHASE 1: Find the middle ---
  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  // --- PHASE 2: Reverse the second half ---
  let prev = null;

  while (p1) {
    const next = p1.next;
    p1.next = prev;
    prev = p1;
    p1 = next;
  }

  // --- PHASE 3: Compare both halves ---
  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) return false;

    left = left.next;
    right = right.next;
  }

  return true;
};
