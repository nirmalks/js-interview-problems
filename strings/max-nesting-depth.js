var maxDepth = function (s) {
  let max = 0;
  let count = 0;
  for (let c of s) {
    if (c == '(') {
      count++;
      max = Math.max(max, count);
    } else if (c == ')') {
      count--;
    }
  }

  return max;
};
