function searchSingleBruteForce(nums) {
  const size = nums.length;
  if (size == 1) {
    return nums[0];
  }
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index == 0) {
      if (element != nums[index + 1]) {
        return element;
      }
    } else if (index == size - 1) {
      if (element != nums[index - 1]) {
        return element;
      }
    } else {
      if (element != nums[index - 1] && element != nums[index + 1]) {
        return element;
      }
    }
  }
}

function searchSingleBinary(nums) {
  const size = nums.length;

  if (size == 1) {
    return nums[0];
  }
  if (nums[0] != nums[1]) {
    return nums[0];
  } else if (nums[size - 1] != nums[size - 2]) {
    return nums[size - 1];
  }

  let left = 0;
  let right = size - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]) {
      return nums[mid];
    } else if (
      (mid % 2 === 0 && nums[mid] == nums[mid + 1]) ||
      (mid % 2 == 1 && nums[mid] == nums[mid - 1])
    ) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
