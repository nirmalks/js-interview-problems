function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const res = fibonacci(5);
console.log(res);

function fibonacciOptimal(n) {
  let map = new Map();
  return helper(n, map);
}

function helper(n, map) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (map.has(n)) {
    return map.get(n);
  }
  const res = helper(n - 1, map) + helper(n - 2, map);
  map.set(n, res);
  return res;
}

const o = fibonacciOptimal(5);
console.log(o);
