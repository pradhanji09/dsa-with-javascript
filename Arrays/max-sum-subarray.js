/**
 * LeetCode #53 - Maximum Subarray
 * Topic: Array
 * Pattern: Kadane's Algorithm
 *
 * Problem:
 * Given an integer array nums, find the contiguous subarray
 * with the largest sum and return its sum.
 *
 * Approach:
 * - Traverse the array while maintaining the current subarray sum.
 * - Update the maximum sum whenever a larger sum is found.
 * - If the current sum becomes negative, reset it to 0 since
 *   a negative prefix cannot contribute to a larger future sum.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var maxSubArray = function (nums) {
  let curSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    maxSum = Math.max(maxSum, curSum);

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return maxSum;
};
