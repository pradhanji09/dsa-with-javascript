/**
 * LeetCode #5 - Longest Palindromic Substring
 * Topic: Strings
 * Pattern: Expand Around Center
 *
 * Problem:
 * Given a string s, return the longest
 * palindromic substring in s.
 *
 * Approach:
 * - Treat each character as the center of a palindrome.
 * - Expand outward while characters match.
 * - Check both odd-length and even-length palindromes.
 * - Track the starting index and maximum length found.
 *
 * Time Complexity:  O(n²)
 * Space Complexity: O(1)
 */
var longestPalindrome = function (s) {
  let start = 0;
  let maxLength = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;

      if (currentLength > maxLength) {
        start = left;
        maxLength = currentLength;
      }

      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expand(i, i); // Odd palindrome
    expand(i, i + 1); // Even palindrome
  }

  return s.substring(start, start + maxLength);
};
