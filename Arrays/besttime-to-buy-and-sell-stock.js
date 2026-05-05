/**
 * LeetCode #121 - Best Time to Buy and Sell Stock
 * Topic: Arrays
 * Pattern: Sliding Window (Two Pointers)
 *
 * Problem:
 * Given an array prices where prices[i] is the price on day i,
 * return the maximum profit from buying and selling once.
 *
 * Approach: Two Pointers (Buy/Sell days)
 * - buyDate starts at 0, sellDate expands from 1.
 * - If cheaper price found → update buyDate to current sellDate.
 * - Calculate profit at each step and track maximum.
 *
 * Time:  O(n) - single pass through the array
 * Space: O(1) - no extra data structures used
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let buyDate = 0;

  for (let sellDate = 1; sellDate < prices.length; sellDate++) {
    if (prices[sellDate] < prices[buyDate]) {
      buyDate = sellDate;
    }
    const curProfit = prices[sellDate] - prices[buyDate];
    maxProfit = Math.max(maxProfit, curProfit);
  }
  return maxProfit;
};
