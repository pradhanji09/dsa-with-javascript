/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * LeetCode #349 - Intersection of Two Arrays
 * Topic: Arrays / Hashing
 *
 * Problem:
 * Given two integer arrays nums1 and nums2, return an array
 * of their intersection. Each element in the result must be
 * unique and the result can be in any order.
 *
 * Approach: Two Sets
 * - Convert nums1 into a Set for O(1) lookup and auto-deduplication.
 * - Iterate nums2, if a number exists in nums1Set add it to resultSet.
 * - resultSet automatically handles duplicates in nums2.
 * - Spread resultSet into an array for the final answer.
 *
 * Time:  O(n + m) - O(n) to build nums1Set, O(m) to iterate nums2
 * Space: O(n + m) - nums1Set holds n, resultSet holds up to min(n,m)
 */

var intersection = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const resultSet = new Set();
  for (const num of nums2) {
    if (nums1Set.has(num)) resultSet.add(num);
  }
  return [...resultSet];
};
