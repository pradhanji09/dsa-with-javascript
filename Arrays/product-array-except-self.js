/**
 * LeetCode #238 - Product of Array Except Self
 * Topic: Arrays
 * Pattern: Prefix Product (in-place)
 *
 * Problem:
 * Given an integer array nums, return an array where each element
 * is the product of all elements except itself. Without division.
 *
 * Approach: Prefix + Suffix Product in-place
 * - First pass (left to right): fill result[i] with product
 *   of all elements to the LEFT of i.
 * - Second pass (right to left): multiply result[i] with product
 *   of all elements to the RIGHT of i.
 * - No division, no extra arrays needed.
 *
 * Time:  O(n) - two passes through the array
 * Space: O(1) - result array doesn't count as extra space
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(1);

  // Prefix pass — product of everything to the left
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix pass — multiply product of everything to the right
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
};
