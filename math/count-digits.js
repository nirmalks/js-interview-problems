function countDigits(n) {
  let counter = 0;
  let num = n;

  while (num > 0) {
    counter += 1;
    num = Math.floor(num / 10);
  }
  return counter;
}

const res = countDigits(123456);
console.log(res);
