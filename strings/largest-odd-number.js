var largestOddNumber = function (num) {
  for (let index = num.length - 1; index >= 0; index--) {
    const n = num.charAt(index) - '0';
    console.log(n);
    if (n % 2 !== 0) {
      return num.substring(0, index + 1);
    }
  }

  return '';
};

const res = largestOddNumber('377');
console.log(res);
