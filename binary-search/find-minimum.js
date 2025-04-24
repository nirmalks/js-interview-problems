/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = Infinity;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[left] <= nums[mid]) {
      if (nums[left] < ans) {
        ans = nums[left];
      }
      left = mid + 1;
    } else {
      if (nums[mid] < ans) {
        ans = nums[mid];
      }
      right = mid - 1;
    }
  }

  return ans;
};
