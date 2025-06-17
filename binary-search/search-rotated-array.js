/*
Calculate mid = Math.floor((left + right) / 2)

If nums[mid] == target, return mid.

Determine which half is sorted:

If nums[mid] >= nums[left]: Left half is sorted

If target lies in this sorted half (nums[left] <= target <= nums[mid]), search in the left half

Else, search in the right half

Else: Right half is sorted

If target lies in this sorted half (nums[mid] <= target <= nums[right]), search in the right half

Else, search in the left half
*/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target && nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
