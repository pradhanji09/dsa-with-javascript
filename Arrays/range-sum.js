/**
 * LeetCode #303 - Range Sum Query - Immutable
 * Topic: Arrays
 * Pattern: Prefix Sum
 *
 * Problem:
 * Given an integer array nums, handle multiple queries of finding
 * the sum of elements between indices left and right inclusive.
 *
 * Approach: Prefix Sum
 * - Build prefix array where prefix[i] = sum of nums[0..i-1].
 * - Start with prefix[0] = 0 as base.
 * - Any range sum [left, right] = prefix[right+1] - prefix[left].
 *
 * Build Time:  O(n) - single pass to build prefix array
 * Query Time:  O(1) - direct index lookup
 * Space:       O(n) - prefix array of size n+1
 */
var NumArray = function (nums) {
  this.prefix = [0];
  for (let i = 0; i < nums.length; i++) {
    this.prefix.push(this.prefix[i] + nums[i]);
  }
};

NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right + 1] - this.prefix[left];
};
