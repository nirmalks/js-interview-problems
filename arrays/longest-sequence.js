//TLE - O(N2)
var longestConsecutive = function (nums) {
  const size = nums.length;
  let longest = 0;

  for (let index = 0; index < size; index++) {
    let element = nums[index];

    let count = 1;

    while (linearSearch(nums, element + 1) == true) {
      element += 1;
      count++;
    }

    longest = Math.max(count, longest);
  }

  return longest;
};

function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (el == arr[i]) {
      return true;
    }
  }

  return false;
}

// using sorting
var longestConsecutiveSorting = function (nums) {
  const size = nums.length;
  let longest = 0;
  nums.sort((a, b) => a - b);

  let lastSmaller = -Infinity;
  let count = 0;

  for (let index = 0; index < size; index++) {
    let element = nums[index];

    if (element - 1 === lastSmaller) {
      count += 1;
      lastSmaller = element;
    } else if (element !== lastSmaller) {
      count = 1;
      lastSmaller = element;
    }
    longest = Math.max(count, longest);
  }

  return longest;
};

var longestConsecutiveOptimalSet = function (nums) {
  const size = nums.length;
  let longest = 0;

  const set = new Set(nums);
  let count = 0;

  for (let element of set.values()) {
    if (!set.has(element - 1)) {
      count = 1;

      while (set.has(element + 1)) {
        count += 1;
        element++;
      }
      longest = Math.max(count, longest);
    }
  }

  return longest;
};
