/**
 * LeetCode #283 - Move Zeroes
 * Topic: Arrays
 * Pattern: Two Pointers
 *
 * Problem:
 * Given an integer array nums, move all 0's
 * to the end while maintaining the relative
 * order of non-zero elements.
 *
 * Approach: Two Pointers
 * - Use pointer `r` to traverse array.
 * - Use pointer `l` to track position
 *   for next non-zero element.
 * - Swap non-zero elements to front in-place.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(1) - in-place swapping
 */
var moveZeroes = function (nums) {
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
    }
  }

  return nums;
};
