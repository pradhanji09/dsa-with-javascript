/**
 * LeetCode #14 - Longest Common Prefix
 * Topic: Strings
 * Pattern: Sorting
 *
 * Problem:
 * Given an array of strings, find the longest
 * common prefix shared among all strings.
 * If there is no common prefix, return an empty string.
 *
 * Approach: Sorting
 * - Sort the array lexicographically.
 * - Compare only the first and last strings.
 * - The common prefix between them is the
 *   common prefix for the entire array.
 * - Count matching characters from the start
 *   and return the matching substring.
 *
 * Time Complexity:  O(n log n * m)
 *                   n = number of strings
 *                   m = average string length
 * Space Complexity: O(1)
 *                   (excluding sorting implementation details)
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  strs.sort();

  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let i = 0;

  while (i < firstStr.length) {
    if (firstStr.charAt(i) === lastStr.charAt(i)) {
      i++;
    } else {
      break;
    }
  }

  return firstStr.slice(0, i);
};
