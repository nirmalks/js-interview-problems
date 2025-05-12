function reverseNum(n) {
  let num = n;
  let rev = 0;
  while (num > 0) {
    let last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  return rev;
}

const res = reverseNum(123456);
console.log(res);
