/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/*
Binary search loop (same logic): check nums[mid] == target

But if nums[left] == nums[mid] == nums[right], you can’t tell which half is sorted. In that case, you:

left++ and right-- to shrink the search window until the ambiguity clears.

Otherwise:

If left half is sorted (nums[left] <= nums[mid])

Check if target lies in that half

Else:

Right half is sorted — check if target lies there
*/
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    console.log(mid);
    if (nums[mid] == target) {
      return true;
    }

    console.log(nums[left]);
    while (nums[left] == nums[mid] && nums[mid] == nums[right]) {
      console.log(nums);
      console.log('eq');
      left++;
      right--;
    }

    if (nums[left] <= nums[mid]) {
      console.log(left, mid, nums[left], nums[mid]);
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

  return false;
};

const res = search([3, 1], 1);
console.log(res);
