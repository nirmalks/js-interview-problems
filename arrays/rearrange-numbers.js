var rearrangeArray = function (nums) {
  let p = 0;
  let n = 1;
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (el >= 0) {
      arr[p] = el;
      p += 2;
    } else {
      arr[n] = el;
      n += 2;
    }
  }

  return arr;
};
