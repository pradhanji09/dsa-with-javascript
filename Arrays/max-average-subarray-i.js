/**
 * LeetCode #643 - Maximum Average Subarray I
 * Topic: Arrays
 * Pattern: Sliding Window (Fixed Size)
 *
 * Problem:
 * Given an integer array nums and integer k, find the subarray
 * of length k with the maximum average and return that average.
 *
 * Approach: Fixed Size Sliding Window
 * - Calculate sum of first window of size k.
 * - Slide window right: add incoming element, remove outgoing element.
 * - Track maximum average throughout.
 *
 * Time:  O(n) - two passes, each O(n) → overall O(n)
 * Space: O(1) - no extra data structures used
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxA = sum / k;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxA = Math.max(maxA, sum / k);
  }

  return maxA;
};
