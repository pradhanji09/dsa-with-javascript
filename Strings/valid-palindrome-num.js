/**
 * LeetCode #9 - Palindrome Number
 * Topic: Math / Strings
 * Pattern: Two Pointers
 *
 * Problem:
 * Given an integer x, return true if x is a palindrome integer.
 *
 * Approach: Convert to String + Two Pointers
 * - Early exit for negative numbers — never a palindrome.
 * - Convert number to string, apply L and R pointers from both ends.
 * - If any mismatch found → return false.
 *
 * Time:  O(n) - single pass through the string
 * Space: O(n) - string conversion of number
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let str = x.toString();
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] === str[r]) {
      l++;
      r--;
    } else return false;
  }
  return true;
};
