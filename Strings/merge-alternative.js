/**
 * LeetCode #1768 - Merge Strings Alternately
 * Topic: Strings
 * Pattern: Two Pointers
 *
 * Problem:
 * Given two strings word1 and word2,
 * merge them by adding letters in alternating order,
 * starting with word1.
 * If one string is longer, append the remaining letters.
 *
 * Approach:
 * - Use two pointers to traverse both strings.
 * - Append one character from each string alternately.
 * - Continue until both strings are fully processed.
 *
 * Time Complexity:  O(n + m)
 * Space Complexity: O(n + m)
 */
var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let result = "";

  while (word1[p1] || word2[p2]) {
    if (word1[p1]) {
      result += word1[p1];
      p1++;
    }

    if (word2[p2]) {
      result += word2[p2];
      p2++;
    }
  }

  return result;
};
