function squareroot(n) {
  let left = 0;
  let right = n / 2;

  while (left <= right) {
    if (left * left == n) {
      return left;
    }
    left++;
  }

  return -1;
}
