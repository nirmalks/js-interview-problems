var moveZeroes = function (nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      zeroCount++;
    } else if (zeroCount >= 1) {
      let temp = nums[i];
      nums[i] = 0;
      nums[i - zeroCount] = temp;
    }
  }
};
