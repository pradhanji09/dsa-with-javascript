/**
 * LeetCode #1 - Two Sum
 * Approach: HashMap - store complement as we iterate
 *
 * Time:  O(n) - single pass through array
 * Space: O(n) - HashMap stores up to n elements
 */
var twoSum = function (nums, target) {
  const map = new Map(); // stores { value → index }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // what we need

    if (map.has(complement)) {
      return [map.get(complement), i]; // found it!
    }

    map.set(nums[i], i); // store current number
  }
};
