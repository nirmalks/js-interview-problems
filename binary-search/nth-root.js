function nthRoot(n, m) {
  let left = 1;
  let right = m;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midN = calcRoot(mid, n, m);
    if (midN == 1) return mid;
    else if (midN == 0) {
      left = mid - 1;
    } else {
      right = mid + 1;
    }
  }
}

function calcRoot(mid, n, m) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= mid;
    if (ans > m) return 2;
  }

  if (ans == m) return 1;

  return 0;
}

let n = 3,
  m = 27;
let ans = nthRoot(n, m);
console.log('The answer is: ' + ans);
