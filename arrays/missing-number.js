var missingNumber = function (nums) {
  let set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return -1;
};

let missingNumberSummationMethod = function (nums) {
  let sum = nums.reduce((total, acc) => total + acc, 0);
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  return total - sum;
};
