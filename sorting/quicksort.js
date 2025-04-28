function quickSort(arr, low, high) {
  if (low < high) {
    let partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);
  return j;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const res = quickSort([33, 44, 12, 11, 3, 64], 0, 5);
console.log(res);
