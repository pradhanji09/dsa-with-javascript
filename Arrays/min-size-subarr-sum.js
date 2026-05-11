/**
 * LeetCode #209 - Minimum Size Subarray Sum
 * Topic: Arrays
 * Pattern: Sliding Window
 *
 * Problem:
 * Given an array of positive integers nums
 * and a positive integer target,
 * return the minimal length of a subarray
 * whose sum is greater than or equal to target.
 * If no such subarray exists, return 0.
 *
 * Approach: Sliding Window
 * - Expand window using right pointer.
 * - Maintain running window sum.
 * - While window sum satisfies target,
 *   update minimum length and shrink window
 *   from left side.
 *
 * Time Complexity:  O(n) - each pointer moves at most n times
 * Space Complexity: O(1) - constant extra space
 */
var minSubArrayLen = function (target, nums) {
  let l = 0;
  let minLength = Infinity;
  let sum = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];

    while (sum >= target) {
      minLength = Math.min(minLength, r - l + 1);

      if (minLength === 1) return 1;

      sum -= nums[l];
      l++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
