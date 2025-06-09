/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*

Reverse the entire array → becomes [7,6,5,4,3,2,1].

Reverse the first k elements → becomes [5,6,7,4,3,2,1].

Reverse the remaining n-k elements → becomes [5,6,7,1,2,3,4].
*/
var rotate = function (nums, k) {
  const size = nums.length;
  const arr = [];
  k = k % size; // Ensure k is within the bounds of the array size
  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);
};

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
