function multiplier(factor) {
  return function (num) {
    return factor * num;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(4));
console.log(triple(4));
