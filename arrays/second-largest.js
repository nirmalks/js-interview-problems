const array = [30, 40, 50, 67, 20];

function findSecondMax(array) {
  let max = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element > max) {
      secondMax = max;
      max = element;
    } else if (element > secondMax) {
      secondMax = element;
    }
  }
  return secondMax;
}

console.log(findSecondMax(array));
