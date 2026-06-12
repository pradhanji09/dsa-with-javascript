/**
 * LeetCode #66 - Plus One
 * Topic: Arrays
 * Pattern: Carry Propagation
 *
 * Problem:
 * Given a non-empty array of digits representing
 * a non-negative integer, increment the integer by one.
 *
 * Approach: Carry Propagation
 * - Traverse digits from right to left.
 * - If current digit is less than 9,
 *   increment it and return immediately.
 * - Otherwise set it to 0 and continue carrying.
 * - If all digits are 9, prepend 1.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
};
