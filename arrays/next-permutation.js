var nextPermutation = function (nums) {
  const size = nums.length;
  let i = size - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  console.log(i);
  if (i >= 0) {
    let j = size - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }

    swap(nums, i, j);
  }
  reverse(nums, i + 1, size - 1);
  console.log(nums);
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

const res = nextPermutation([1, 3, 5, 4, 2]);
