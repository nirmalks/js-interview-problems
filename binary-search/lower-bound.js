function lowerBound(nums, target) {
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

const result = lowerBound([1, 2, 2, 3], 2);
console.log(result);
