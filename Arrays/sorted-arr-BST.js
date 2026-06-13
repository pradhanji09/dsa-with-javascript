/**
 * LeetCode #108 - Convert Sorted Array to Binary Search Tree
 * Topic: Trees
 * Pattern: Divide and Conquer / DFS Recursion
 *
 * Problem:
 * Given an integer array nums where the elements
 * are sorted in ascending order, convert it to a
 * height-balanced Binary Search Tree.
 *
 * Approach:
 * - Choose the middle element as the root.
 * - Recursively build the left subtree from the left half.
 * - Recursively build the right subtree from the right half.
 * - Repeat until the subarray becomes empty.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(log n) - recursion stack for balanced tree
 */
var sortedArrayToBST = function (nums) {
  function convert(left, right) {
    if (left > right) {
      return null;
    }

    const mid = Math.floor(left + (right - left) / 2);

    const node = new TreeNode(nums[mid]);

    node.left = convert(left, mid - 1);
    node.right = convert(mid + 1, right);

    return node;
  }

  return convert(0, nums.length - 1);
};
