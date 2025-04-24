function findPeakElementBruteForce(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || nums[i - 1] < nums[i]) &&
      (i === n - 1 || nums[i] > nums[i + 1])
    ) {
      return i;
    }
  }
  return -1;
}

function findPeakElement(nums) {
  let n = nums.length;

  if (n === 1) return nums[0];
  if (nums[0] > nums[1]) return nums[0];
  if (nums[n - 1] > nums[n - 2]) return n - 1;

  let left = 1;
  let right = size - 2;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    }

    if (nums[mid] > nums[mid - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
