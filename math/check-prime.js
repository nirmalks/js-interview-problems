function checkPrime(n) {
  let count = 0;
  for (let index = 1; index <= Math.sqrt(n); index++) {
    if (n % index === 0) {
      count++;

      if (n / index != index) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }
  if (count === 2) {
    return true;
  }
  return false;
}

const res = checkPrime(2);
console.log(res);
const res2 = checkPrime(5);
console.log(res2);
const res3 = checkPrime(6);
console.log(res3);
