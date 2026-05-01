/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * LeetCode #167 - Two Sum II
 * Topic: Arrays
 * Pattern: Two Pointers
 *
 * Problem:
 * Given a 1-indexed sorted array, find two numbers that add up
 * to target. Return their indices as [index1, index2].
 *
 * Approach: Two Pointers
 * - Since array is sorted, place L at start and R at end.
 * - If sum < target → move L right to increase sum.
 * - If sum > target → move R left to decrease sum.
 * - If sum === target → return 1-indexed positions.
 *
 * Time:  O(n) - single pass through the array
 * Space: O(1) - no extra data structures used
 */
console.time();
var twoSum = function (numbers, target) {
  let L = 0;
  let R = numbers.length - 1;
  while (L < R) {
    const sum = numbers[L] + numbers[R];
    if (sum < target) L++;
    if (sum > target) R--;

    if (sum === target) return [L + 1, R + 1];
  }
  return [];
};
console.log(twoSum());
console.timeEnd();
