function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(`${arr[i]} , ${arr[j]}`);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(insertionSort(arr)); // Output: [11, 12, 22, 25, 64]
