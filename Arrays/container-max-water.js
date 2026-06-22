/**
 * LeetCode #11 - Container With Most Water
 * Topic: Two Pointers
 * Pattern: Opposite Direction Two Pointers
 *
 * Problem:
 * Given an array of heights, find two lines that together
 * with the x-axis form a container that holds the maximum water.
 *
 * Approach:
 * - Start with pointers at both ends of the array.
 * - Calculate the area formed by the two heights.
 * - Move the pointer with the smaller height inward,
 *   since the smaller height limits the current area.
 * - Track the maximum area found.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    const minHeight = Math.min(height[l], height[r]);
    const distance = r - l;

    maxWater = Math.max(maxWater, minHeight * distance);

    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxWater;
};
