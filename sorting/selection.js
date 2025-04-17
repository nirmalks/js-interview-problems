function selectionSort(arr) {
  let n = arr.length;
  for (let index = 0; index < n - 1; index++) {
    let minIndex = index;
    for (let j = index + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    console.log(`min index ${minIndex} and index ${index}`);
    if (minIndex !== index) {
      let temp = arr[index];
      arr[index] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
