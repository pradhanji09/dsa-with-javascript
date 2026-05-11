/**
 * LeetCode #977 - Squares of a Sorted Array
 * Topic: Arrays
 * Pattern: Two Pointers
 *
 * Problem:
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number
 * sorted in non-decreasing order.
 *
 * Approach: Two Pointers
 * - Use left and right pointers to compare squares
 *   from both ends of the array.
 * - Larger square is placed at the current
 *   highest index in result array.
 * - Fill result array from end to beginning.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(n) - result array
 */
var sortedSquares = function (nums) {
  let l = 0;
  let result = new Array(nums.length);
  let r = nums.length - 1;

  for (let k = nums.length - 1; k >= 0; k--) {
    const leftSqr = nums[l] * nums[l];
    const rightSqr = nums[r] * nums[r];

    if (leftSqr < rightSqr) {
      result[k] = rightSqr;
      r--;
    } else {
      result[k] = leftSqr;
      l++;
    }
  }

  return result;
};
