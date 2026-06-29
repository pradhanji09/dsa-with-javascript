/**
 * LeetCode #2 - Add Two Numbers
 * Topic: Linked List
 * Pattern: Simulation
 *
 * Problem:
 * Two non-empty linked lists represent two non-negative integers
 * in reverse order. Add the two numbers and return the sum as a
 * linked list in the same reverse order.
 *
 * Approach:
 * - Traverse both linked lists simultaneously.
 * - Add the corresponding digits along with any carry.
 * - Create a new node for the current digit (sum % 10).
 * - Update the carry (Math.floor(sum / 10)).
 * - Continue until both lists are exhausted and no carry remains.
 *
 * Time Complexity:  O(max(n, m))
 * Space Complexity: O(max(n, m))
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);

    curr.next = new ListNode(sum % 10);
    curr = curr.next;
  }

  return dummy.next;
};
