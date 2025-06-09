var missingNumber = function (nums) {
  let set = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return -1;
};

/*
The sum of first n natural numbers including 0 is:

total
=
𝑛
(
𝑛
+
1
)
2
total= 
2
n(n+1)
​
 
If you subtract the actual sum of the array from the expected total, you'll get the missing number.
*/
let missingNumberSummationMethod = function (nums) {
  let sum = nums.reduce((total, acc) => total + acc, 0);
  const n = nums.length;
  let total = (n * (n + 1)) / 2;
  return total - sum;
};
