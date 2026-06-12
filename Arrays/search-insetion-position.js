/**
 * LeetCode #35 - Search Insert Position
 * Topic: Arrays
 * Pattern: Binary Search
 *
 * Problem:
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found.
 * If not, return the index where it would be inserted
 * to maintain sorted order.
 *
 * Approach: Binary Search
 * - Search for the target using binary search.
 * - If found, return its index immediately.
 * - If not found, the left pointer will end at the
 *   correct insertion position.
 *
 * Time Complexity:  O(log n)
 * Space Complexity: O(1)
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};
