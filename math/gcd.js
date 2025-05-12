function gcdBruteForce(n1, n2) {
  let min = Infinity;
  let res = 0;
  min = Math.min(n1, min);
  min = Math.min(n2, min);

  for (let index = 1; index < min; index++) {
    if (n1 % index == 0 && n2 % index == 0) {
      res = index;
    }
  }

  return res;
}

const res = gcdBruteForce(9, 12);
console.log(res);
const res2 = gcdBruteForce(20, 15);
console.log(res2);

function gcdBetter(n1, n2) {
  let min = Infinity;
  let res = 0;
  min = Math.min(n1, min);
  min = Math.min(n2, min);

  for (let index = min; index > 0; index--) {
    if (n1 % index == 0 && n2 % index == 0) {
      res = index;
    }
  }

  return res;
}

const b1 = gcdBruteForce(9, 12);
console.log(b1);
const b2 = gcdBruteForce(20, 15);
console.log(b2);

function gcdOptimal(n1, n2) {
  if (n1 === 0) {
    return n2;
  }
  if (n2 === 0) {
    return n1;
  }
  if (n1 > n2) {
    return gcdOptimal(n1 - n2, n2);
  } else {
    return gcdOptimal(n2 - n1, n1);
  }
}

const o1 = gcdBruteForce(9, 12);
console.log(o1);
const o2 = gcdBruteForce(20, 15);
console.log(o2);
