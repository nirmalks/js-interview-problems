/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let ptrZero = 0;
  let size = nums.length;
  let ptrTwo = size - 1;
  let i = 0;
  while (i <= ptrTwo) {
    switch (nums[i]) {
      case 0:
        console.log('insdie 0');
        console.log(i, ptrZero);
        console.log(nums[i], nums[ptrZero]);
        swap(nums, i, ptrZero);
        ptrZero++;
        i++;
        console.log(nums);
        break;
      case 1:
        console.log('insdie 1');
        i++;
        break;

      case 2:
        console.log('insdie two');
        console.log(i, ptrTwo);
        console.log(nums[i], nums[ptrTwo]);
        swap(nums, i, ptrTwo);
        ptrTwo--;
        console.log(nums);
        break;
    }
  }
  console.log(nums);
};

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

const res = sortColors([2, 0, 2, 1, 1, 0]);
console.log(res);
