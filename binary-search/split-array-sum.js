/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let left = 0;
  let right = 0;

  for (let num of nums) {
    left = Math.max(left, num);
    right += num;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isFeasible(nums, mid, k)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function isFeasible(nums, sum, k) {
  let count = 1;
  let total = 0;

  for (let num of nums) {
    if (total + num > sum) {
      total = num;
      count++;
    } else {
      total += num;
    }

    if (count > k) {
      return false;
    }
  }

  return true;
}
