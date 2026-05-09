/**
 * LeetCode #13 - Roman to Integer
 * Topic: Strings
 * Pattern: HashMap + Greedy
 *
 * Problem:
 * Given a roman numeral string s, convert it to an integer.
 *
 * Approach: HashMap Lookup + Greedy
 * - Store all roman symbol values in a Map.
 * - Iterate through string, compare current and next symbol.
 * - If current < next → subtract current (e.g. IV = 4).
 * - If current >= next → add current (e.g. VI = 6).
 * - When i is last character, next is undefined → adds current.
 *
 * Time:  O(n) - single pass through the string
 * Space: O(1) - Map is fixed size of 7 symbols
 */
var romanToInt = function (s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const current = romanValue[s[i]];
    const next = romanValue[s[i + 1]];

    total += current < next ? -current : current;
  }
  return total;
};
