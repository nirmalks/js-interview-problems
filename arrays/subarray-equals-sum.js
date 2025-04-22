var subarraySumBruteForce = function (nums, k) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      console.log(sum);
      if (sum == k) {
        count++;
      }
    }
  }

  return count++;
};

// const res = subarraySumBruteForce([1, 2, 3], 3);
// console.log(res);

var subarraySumBetterBruteForce = function (nums, k) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      console.log(sum);
      if (sum == k) {
        count++;
      }
    }
  }

  return count++;
};

// const res2 = subarraySumBetterBruteForce([1, 2, 3], 3);
// console.log(res2);

var subarraySumMap = function (nums, k) {
  const n = nums.length;
  let count = 0;
  let map = new Map();
  map.set(0, 1);
  let prefixSum = 0;
  for (let i = 0; i < n; i++) {
    let el = nums[i];

    prefixSum += el;
    console.log(prefixSum);
    const remove = prefixSum - k;
    console.log('diff', remove);
    if (map.has(remove)) {
      console.log('map val', map.get(remove));
      count += map.get(remove);
    }
    if (map.get(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1);
    } else {
      map.set(prefixSum, 1);
    }
  }

  return count;
};

const res = subarraySumMap([1, 2, 3], 3);
console.log(res);
