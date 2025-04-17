var rotate = function (nums, k) {
  const size = nums.length;
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[(i + k) % size] = nums[i];
  }
  for (let i = 0; i < size; i++) {
    nums[i] = arr[i];
  }
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
