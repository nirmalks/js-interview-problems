/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let left = 1;
  let right = getMax(nums);
  let min = Infinity;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let div = calculateDivisor(nums, mid);

    if (div <= threshold) {
      min = Math.min(mid, min);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return min;
};

function calculateDivisor(nums, mid) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += Math.ceil(nums[i] / mid);
  }
  return total;
}

function getMax(nums) {
  let num = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    num = Math.max(num, nums[i]);
  }
  return num;
}
