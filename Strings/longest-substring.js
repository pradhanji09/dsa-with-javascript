/**
 * LeetCode #3 - Longest Substring Without Repeating Characters
 * Topic: Strings
 * Pattern: Sliding Window (Variable Size) + HashMap
 *
 * Problem:
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * Approach: Variable Size Sliding Window + HashMap
 * - L and R both start at 0.
 * - Expand R each iteration, if s[R] already seen in window
 *   jump L to max(L, lastSeenIndex + 1) — prevents L going backwards.
 * - Map stores each character's last seen index for O(1) lookup.
 * - Track max window size throughout.
 *
 * Time:  O(n) - single pass through the string
 * Space: O(n) - Map stores up to n characters
 */
var lengthOfLongestSubstring = function (s) {
  const umap = new Map();
  let result = 0;
  let L = 0;

  for (let R = 0; R < s.length; R++) {
    if (umap.has(s[R])) {
      L = Math.max(L, umap.get(s[R]) + 1);
    }
    umap.set(s[R], R);
    result = Math.max(result, R - L + 1);
  }
  return result;
};
