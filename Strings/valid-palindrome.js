/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * LeetCode #125 - Valid Palindrome
 * Topic: Strings
 * Pattern: Two Pointers
 *
 * Problem:
 * Given a string s, return true if it is a palindrome considering
 * only alphanumeric characters and ignoring cases.
 *
 * Approach: Sanitize + Two Pointers
 * - Remove all non-alphanumeric characters using regex and lowercase.
 * - Use L and R pointers starting at both ends moving inward.
 * - If any character mismatch found → return false.
 *
 * Time:  O(n) - regex pass O(n) + while loop O(n)
 * Space: O(n) - new sanitized string created
 */
var isPalindrome = function (s) {
  const santizeString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let L = 0;
  let R = santizeString.length - 1;
  while (L < R) {
    if (santizeString[L] !== santizeString[R]) return false;

    L++;
    R--;
  }
  return true;
};
