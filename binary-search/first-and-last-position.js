var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  let leftIndex = findLeftIndex(nums, target);
  let rightIndex = findRightIndex(nums, target);
  return [leftIndex, rightIndex];
};

function findLeftIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) {
      ans = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

function findRightIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = -1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] == target) {
      ans = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}
