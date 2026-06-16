/**
 * LeetCode #213 - House Robber II
 * Topic: Dynamic Programming
 * Pattern: DP (Space Optimized)
 *
 * Problem:
 * Houses are arranged in a circle, meaning the first and last
 * houses are adjacent. Return the maximum amount of money that
 * can be robbed without robbing two adjacent houses.
 *
 * Approach:
 * - Since the first and last houses cannot both be robbed,
 *   split the problem into two linear cases:
 *   1. Rob houses [0 ... n-2] (skip last)
 *   2. Rob houses [1 ... n-1] (skip first)
 * - Use the space-optimized House Robber DP for each case.
 * - Return the maximum of the two results.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
const calcRob = (houses, start, end) => {
  let robbed2 = 0;
  let robbed1 = 0;

  for (let i = start; i < end; i++) {
    const robValueCur = robbed2 + houses[i];
    const robValuePrev = robbed1;

    const robPossible = Math.max(robValueCur, robValuePrev);

    robbed2 = robbed1;
    robbed1 = robPossible;
  }

  return robbed1;
};

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const skipLast = calcRob(nums, 0, nums.length - 1);
  const skipFirst = calcRob(nums, 1, nums.length);

  return Math.max(skipFirst, skipLast);
};
