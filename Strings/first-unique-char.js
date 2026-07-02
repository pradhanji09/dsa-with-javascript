/**
 * LeetCode #387 - First Unique Character in a String
 * Topic: Hashing
 * Pattern: Frequency Counting
 *
 * Problem:
 * Given a string s, return the index of the first
 * non-repeating character. If no such character exists,
 * return -1.
 *
 * Approach:
 * - Count the frequency of each character using a Hash Map.
 * - Traverse the string again and return the index of the
 *   first character whose frequency is 1.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 * where k is the number of unique characters
 * (O(1) for lowercase English letters).
 */
var firstUniqChar = function (s) {
  const map = new Map();

  // Count the frequency of each character
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
