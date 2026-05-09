/**
 * LeetCode #560 - Subarray Sum Equals K
 * Topic: Arrays
 * Pattern: Prefix Sum + HashMap
 *
 * Problem:
 * Given an integer array nums and an integer k, return the total
 * number of subarrays whose sum equals k.
 *
 * Approach: Prefix Sum + HashMap
 * - Track running prefixSum as we iterate.
 * - For each element, check if (prefixSum - k) exists in Map.
 *   If yes, those are valid subarrays ending at current index.
 * - Map stores frequency of each prefixSum seen so far.
 * - Initialize map with {0: 1} to handle subarrays starting at index 0.
 *
 * Time:  O(n) - single pass through the array
 * Space: O(n) - Map stores up to n prefix sums
 */
var subarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, 1);

  let count = 0;
  let prefixSum = 0;

  for (let num of nums) {
    prefixSum += num;

    const complement = prefixSum - k;
    if (map.has(complement)) {
      count += map.get(complement);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
};
