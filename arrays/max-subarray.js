var maxSubArray = function (nums) {
  let curr = 0;
  let maxSum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    maxSum = Math.max(curr, maxSum);

    if (curr < 0) {
      curr = 0;
    }
  }

  return maxSum;
};
