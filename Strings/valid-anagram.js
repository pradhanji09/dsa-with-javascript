/**
 * LeetCode #242 - Valid Anagram
 * Topic: Strings / Hashing
 *
 * Problem:
 * Given two strings s and t, return true if t is an anagram
 * of s, and false otherwise.
 *
 * Approach: Single HashMap (Increment / Decrement)
 * - Early exit if lengths differ — can't be anagram.
 * - Use one Map: increment count for each char in s,
 *   decrement count for each char in t.
 * - If s and t are true anagrams, every character cancels
 *   out to exactly zero.
 * - If any count is non-zero → not an anagram.
 *
 * Note: Two-Map approach (kept below for reference) also works
 * but uses extra space by maintaining two separate Maps.
 *
 * Time:  O(n) - three passes, each O(n) → overall O(n)
 * Space: O(n) - Map stores at most n unique characters
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();

  for (const char of s) map.set(char, (map.get(char) || 0) + 1);
  for (const char of t) map.set(char, (map.get(char) || 0) - 1);

  for (const count of map.values()) {
    if (count !== 0) return false;
  }
  return true;
};

/*
 * [Reference] Two-Map Approach
 * Approach: Build separate frequency maps for s and t,
 * then compare both maps key by key.
 * Time: O(n) | Space: O(n) — uses two Maps instead of one.
 *
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sMap = new Map();
  const tMap = new Map();

  for (const char of s) sMap.set(char, (sMap.get(char) || 0) + 1);
  for (const char of t) tMap.set(char, (tMap.get(char) || 0) + 1);

  for (const [k, v] of sMap) {
    if (tMap.get(k) !== v) return false;
  }
  return true;
};
