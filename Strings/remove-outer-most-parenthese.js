/**
 * LeetCode #1021 - Remove Outermost Parentheses
 * Topic: Stack
 * Pattern: Counter / Parentheses Depth Tracking
 *
 * Problem:
 * Given a valid parentheses string s,
 * remove the outermost parentheses of every primitive string.
 *
 * Approach:
 * - Track the current nesting depth using a counter.
 * - For '(' add it only if we're already inside a primitive.
 * - For ')' remove depth first, then add it only if we're still inside.
 * - This effectively skips the outermost parentheses of each primitive.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 */
var removeOuterParentheses = function (s) {
  let count = 0;
  let sanitizedStr = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      sanitizedStr += count ? char : "";
      count++;
    } else {
      count--;
      sanitizedStr += count ? char : "";
    }
  }

  return sanitizedStr;
};
