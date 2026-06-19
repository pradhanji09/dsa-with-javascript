/**
 * LeetCode #2956 - Find Common Elements Between Two Arrays
 * Topic: Hashing
 * Pattern: Hash Set Lookup
 *
 * Problem:
 * Given two integer arrays nums1 and nums2, return:
 * - answer[0]: number of indices i such that nums1[i] exists in nums2
 * - answer[1]: number of indices j such that nums2[j] exists in nums1
 *
 * Approach:
 * - Store nums1 and nums2 in separate Hash Sets.
 * - Traverse nums1 and count elements present in set2.
 * - Traverse nums2 and count elements present in set1.
 * - Return both counts.
 *
 * Time Complexity:  O(n + m)
 * Space Complexity: O(n + m)
 */
var findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const res = new Array(2).fill(0);

  for (const num of nums1) {
    if (set2.has(num)) {
      res[0]++;
    }
  }

  for (const num of nums2) {
    if (set1.has(num)) {
      res[1]++;
    }
  }

  return res;
};
