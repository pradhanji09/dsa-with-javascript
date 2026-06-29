/**
 * LeetCode #28 - Find the Index of the First Occurrence in a String
 * Topic: Strings
 * Pattern: Sliding Window / Brute Force
 *
 * Problem:
 * Given two strings, haystack and needle, return the index of the
 * first occurrence of needle in haystack. If needle is not found,
 * return -1.
 *
 * Approach:
 * - Maintain a window of the same length as needle.
 * - Compare the first and last characters to quickly filter
 *   non-matching windows.
 * - If both match, compare the entire substring using slice().
 * - Return the starting index of the first match.
 *
 * Time Complexity: O((n - m + 1) × m)
 * Space Complexity: O(m)
 */
var strStr = function (haystack, needle) {
  if (haystack === needle) return 0;

  let l = 0;
  let r = needle.length - 1;

  const nFirst = needle[0];
  const nLast = needle[needle.length - 1];

  while (r < haystack.length) {
    if (haystack[l] === nFirst && haystack[r] === nLast) {
      const substring = haystack.slice(l, r + 1);

      if (substring === needle) {
        return l;
      }
    }

    l++;
    r++;
  }

  return -1;
};
