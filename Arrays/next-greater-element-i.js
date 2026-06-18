/**
 * LeetCode #496 - Next Greater Element I
 * Topic: Stack
 * Pattern: Monotonic Stack + HashMap
 *
 * Problem:
 * For each element in nums1, find its next greater element
 * in nums2. If it does not exist, return -1.
 *
 * Approach:
 * - Traverse nums2 while maintaining a decreasing stack.
 * - When the current number is greater than the stack top,
 *   it becomes the next greater element for all smaller
 *   elements popped from the stack.
 * - Store these relationships in a HashMap.
 * - Build the answer for nums1 using the HashMap.
 *
 * Time Complexity:  O(n + m)
 * Space Complexity: O(n)
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];

  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      const poppedElement = stack.pop();
      map.set(poppedElement, num);
    }

    stack.push(num);
  }

  return nums1.map((num) => map.get(num) || -1);
};
