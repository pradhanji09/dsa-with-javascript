/**
 * LeetCode #217 - Contains Duplicate
 * Topic: Hashing
 *
 * Problem:
 * Given an integer array nums, return true if any value
 * appears at least twice, return false if every element is distinct.
 *
 * Approach: HashSet
 * - Iterate through nums, for each number check if it already
 *   exists in the Set. If yes, duplicate found → return true.
 *   Otherwise add it to the Set and continue.
 * - Using a Set gives O(1) average lookup vs O(n) for array search.
 *
 * Time:  O(n) - single pass through the array
 * Space: O(n) - Set stores up to n elements in worst case
 */
var containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};
