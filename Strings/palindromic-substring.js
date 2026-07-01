/**
 * LeetCode #647 - Palindromic Substrings
 * Topic: Strings
 * Pattern: Expand Around Center
 *
 * Problem:
 * Given a string s, return the total number of palindromic
 * substrings.
 *
 * Approach:
 * - Treat every character as the center of an odd-length palindrome.
 * - Treat every pair of adjacent characters as the center of an
 *   even-length palindrome.
 * - Expand outward while the characters on both sides are equal.
 * - Count every valid palindrome found during expansion.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */
var countSubstrings = function (s) {
  let count = 0;

  function findPalindromes(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    findPalindromes(i, i); // Odd-length palindromes
    findPalindromes(i, i + 1); // Even-length palindromes
  }

  return count;
};
