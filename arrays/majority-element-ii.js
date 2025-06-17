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

/*

Step 1: Candidate Selection
Maintain two candidates (candidate1, candidate2) and their counts (count1, count2).

Iterate through the array:

If the current number is equal to one of the candidates, increment its count.

If a candidate has count zero, assign the current number as that candidate.

Otherwise, decrement both counts.

Step 2: Verification
The first pass only gives potential candidates.

In the second pass, count their actual frequencies and check if they appear more than ⌊ n/3 ⌋ times.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let candidate1 = 0;
  let candidate2 = 0;
  let count1 = 0;
  let count2 = 0;
  let arr = [];
  let n = nums.length;
  for (const num of nums) {
    if (num == candidate1) {
      count1++;
    } else if (num == candidate2) {
      count2++;
    } else if (count1 == 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 == 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  for (let num of nums) {
    if (num == candidate1) {
      count1++;
    } else if (num == candidate2) {
      count2++;
    }
  }

  if (count1 > n / 3) {
    arr.push(candidate1);
  }

  if (count2 > n / 3) {
    arr.push(candidate2);
  }
  return arr;
};
