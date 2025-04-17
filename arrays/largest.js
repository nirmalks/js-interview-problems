const array = [30, 40, 50, 67, 20];

function findMax(array) {
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log(findMax(array));
