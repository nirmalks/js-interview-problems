function palindrome(n) {
  let num = n;
  let rev = 0;
  while (num > 0) {
    let last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  return rev === n;
}

const res = palindrome(123456);
console.log(res);
const res2 = palindrome(4554);
console.log(res2);
