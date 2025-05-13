function sumFirst(n) {
  let sum = 0;
  return helper(sum, 1, n);
}

function helper(sum, i, n) {
  if (i > n) {
    return sum;
  }

  return helper(sum + i, i + 1, n);
}

const res = sumFirst(5);
console.log(res);

function functionSum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + functionSum(n - 1);
}

const f = functionSum(5);
console.log(f);
