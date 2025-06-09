/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const [key, val] of map.entries()) {
    if (val == 1) {
      return key;
    }
  }

  return -1;
};

/*
The XOR operation (^) has the following key properties:
a ^ a = 0  → Any number XOR itself is zero.
a ^ 0 = a  → Any number XOR zero is the number itself.
XOR is commutative and associative, which means the order of operands doesn’t matter.
When you XOR all numbers in the array:
All numbers that appear twice will cancel each other out and become 0.
The number that appears only once will remain, because it has no pair to cancel it out.
*/

var singleNumber = function (nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }

  return result;
};
