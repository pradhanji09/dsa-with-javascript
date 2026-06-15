/**
 * LeetCode #20 - Valid Parentheses
 * Topic: Stack
 * Pattern: Stack + HashMap
 *
 * Problem:
 * Given a string containing just the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * Approach:
 * - Use a HashMap to store closing-to-opening bracket pairs.
 * - Push opening brackets onto the stack.
 * - For a closing bracket, pop from the stack and verify
 *   it matches the expected opening bracket.
 * - The string is valid only if the stack is empty at the end.
 *
 * Time Complexity:  O(n)
 * Space Complexity: O(n)
 */
var isValid = function (s) {
  const pair = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!pair[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();

      if (pair[char] !== last) return false;
    }
  }

  return stack.length === 0;
};
