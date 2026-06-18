/**
 * LeetCode #503 - Next Greater Element II
 * Topic: Stack
 * Pattern: Monotonic Stack (Circular Array)
 *
 * Problem:
 * Given a circular integer array nums, return the next greater
 * number for every element. If no greater element exists,
 * return -1 for that position.
 *
 * Approach:
 * - Use a monotonic decreasing stack to store indices whose
 *   next greater element has not been found.
 * - Traverse the array twice to simulate circular behavior.
 * - When the current number is greater than the number at the
 *   index on top of the stack, it becomes the next greater
 *   element for that index.
 * - Push indices only during the first pass.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;
  const stk = [];
  const res = new Array(n).fill(-1);

  for (let i = 0; i < n * 2; i++) {
    const idx = i % n;

    while (stk.length > 0 && nums[idx] > nums[stk[stk.length - 1]]) {
      const poppedIdx = stk.pop();
      res[poppedIdx] = nums[idx];
    }

    if (i < n) stk.push(idx);
  }

  return res;
};
