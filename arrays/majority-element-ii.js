/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElementMapVersion = function (nums) {
  let map = new Map();
  let n = nums.length;
  let arr = [];

  for (const num of nums) {
    if (map.has(num)) {
      const count = map.get(num) + 1;
      map.set(num, count);
    } else {
      map.set(num, 1);
    }
  }

  for (const [key, val] of map.entries()) {
    if (val > n / 3) {
      arr.push(key);
    }
  }

  return arr;
};
