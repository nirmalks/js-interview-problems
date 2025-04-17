function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    console.log(` otuer loop ${arr[i]} , ${arr[j]}`);
    while (j > 0 && arr[j - 1] > arr[j]) {
      console.log(`${arr[i]} , ${arr[j]}`);

      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log(insertionSort(arr)); // Output: [11, 12, 22, 25, 64]
