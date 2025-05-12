function extractDigits(n) {
  let num = n;
  const arr = [];
  while (num > 0) {
    let digit = num % 10;
    arr.push(digit);
    num = Math.floor(num / 10);
  }

  return arr;
}

const res = extractDigits(329823);
console.log(res);
