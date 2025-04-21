/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = 0;
  let count = 0;

  for (const num of nums) {
    if (num == majority) {
      count++;
      majority = num;
    } else {
      count--;
    }

    if (count <= 0) {
      count = 1;
      majority = num;
    }
  }

  return majority;
};
