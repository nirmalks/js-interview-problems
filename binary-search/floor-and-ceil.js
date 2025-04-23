function floor(nums, target) {
  let result;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] <= target) {
      result = nums[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function ceil(nums, target) {
  let result;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] >= target) {
      result = nums[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
const result = floor([3, 4, 4, 7, 8, 10], 5);
console.log(result);
const ceilres = ceil([3, 4, 4, 7, 8, 10], 5);
console.log(ceilres);
