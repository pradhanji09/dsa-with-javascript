/**
 * LeetCode #198 - House Robber
 * Topic: Dynamic Programming
 * Pattern: DP (Space Optimized)
 *
 * Problem:
 * Given an integer array nums representing the amount of money
 * at each house, return the maximum amount of money you can rob
 * without robbing two adjacent houses.
 *
 * Approach:
 * - At each house, decide whether to rob it or skip it.
 * - Robbing the current house adds its value to the best amount
 *   from two houses back.
 * - Skipping the current house keeps the best amount from the
 *   previous house.
 * - Track only the previous two DP states to achieve O(1) space.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var rob = function (nums) {
  let rubCountTwoHouse = 0;
  let rubCountPreviousHouse = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentSum = rubCountTwoHouse + nums[i];
    const prevSum = rubCountPreviousHouse;

    const maxRobCan = Math.max(currentSum, prevSum);

    rubCountTwoHouse = rubCountPreviousHouse;
    rubCountPreviousHouse = maxRobCan;
  }

  return rubCountPreviousHouse;
};
