/**
 * LeetCode #523 - Continuous Subarray Sum
 * Topic: Arrays
 * Pattern: Prefix Sum + HashMap
 *
 * Problem:
 * Given an integer array nums and an integer k,
 * return true if nums has a good subarray
 * of size at least two whose elements sum up
 * to a multiple of k.
 *
 * Approach: Prefix Sum + HashMap
 * - Maintain running prefix sum.
 * - Store remainder of prefixSum % k in hashmap.
 * - If same remainder appears again,
 *   subarray sum between indices is divisible by k.
 * - Ensure subarray length is at least 2.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(min(n, k)) - hashmap storage
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map().set(0, -1);

  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    const remainder = currentSum % k;

    if (map.has(remainder)) {
      const prevIndex = map.get(remainder);

      if (i - prevIndex >= 2) return true;
    } else {
      map.set(remainder, i);
    }
  }

  return false;
};
