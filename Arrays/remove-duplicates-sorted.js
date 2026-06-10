/**
 * LeetCode #26 - Remove Duplicates from Sorted Array
 * Topic: Arrays
 * Pattern: Two Pointers
 *
 * Problem:
 * Given a sorted integer array nums,
 * remove the duplicates in-place such that
 * each unique element appears only once.
 * Return the number of unique elements.
 *
 * Approach: Two Pointers
 * - Use one pointer to track the position of
 *   the last unique element.
 * - Use another pointer to scan the array.
 * - When a new unique value is found,
 *   move the write pointer forward and place it there.
 *
 * Time Complexity:  O(n) - single traversal
 * Space Complexity: O(1) - in-place modification
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let p1 = 0;

  for (let p2 = 1; p2 < nums.length; p2++) {
    if (nums[p1] !== nums[p2]) {
      p1++;
      nums[p1] = nums[p2];
    }
  }

  return p1 + 1;
};
