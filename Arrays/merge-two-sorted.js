/**
 * LeetCode #88 - Merge Sorted Array
 * Topic: Arrays
 * Pattern: Three Pointers (Backwards Merge)
 *
 * Problem:
 * Merge nums2 into nums1 as one sorted array.
 * The final sorted array should be stored inside nums1.
 *
 * Approach:
 * - Start from the end of both arrays.
 * - Compare the largest remaining elements.
 * - Place the larger element at the write position.
 * - Move pointers accordingly.
 * - Copy any remaining elements from nums2.
 *
 * Time Complexity:  O(m + n)
 * Space Complexity: O(1)
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let w = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[w] = nums1[p1];
      p1--;
    } else {
      nums1[w] = nums2[p2];
      p2--;
    }
    w--;
  }

  while (p1 >= 0) {
    nums1[w] = nums1[p1];
    p1--;
    w--;
  }

  while (p2 >= 0) {
    nums1[w] = nums2[p2];
    p2--;
    w--;
  }
};
