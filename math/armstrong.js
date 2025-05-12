function armstrong(n) {
  let num = n;
  let sum = 0;

  while (num > 0) {
    sum += Math.pow(num % 10, 3);
    num = Math.floor(num / 10);
  }

  return sum == n;
}

const res = armstrong(153);
console.log(res);

const res2 = armstrong(371);
console.log(res2);

const res3 = armstrong(123);
console.log(res3);
