/**
 * LeetCode #268 - Missing Number
 * Topic: Arrays
 * Pattern: Math / Summation
 *
 * Problem:
 * Given an array nums containing n distinct numbers
 * in the range [0, n], return the only number
 * missing from the array.
 *
 * Approach: Mathematical Summation
 * - Calculate expected sum of numbers from 0 to n
 *   using formula: n * (n + 1) / 2
 * - Traverse array and subtract each number
 *   from expectedSum.
 * - Remaining value is the missing number.
 *
 * Time Complexity:  O(n) - single traversal of array
 * Space Complexity: O(1) - no extra data structure used
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let remaining;

  for (const num of nums) {
    remaining = expectedSum -= num;
  }

  return remaining;
};
