function divisors(n) {
  let num = n;
  let arr = [];
  for (let index = 0; index <= Math.sqrt(n); index++) {
    if (n % index == 0) {
      arr.push(index);
      if (index != n / index) {
        arr.push(Math.floor(n / index));
      }
    }
  }

  const res = arr.sort();
  return res;
}

const res = divisors(36);
console.log(res);
