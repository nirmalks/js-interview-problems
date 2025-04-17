function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

function merge(arr, left, mid, right) {
  let leftPart = arr.slice(left, mid + 1);
  let rightPart = arr.slice(mid + 1, right + 1);
  let i = 0,
    j = 0,
    k = left;

  while (i < leftPart.length && j < rightPart.length) {
    if (leftPart[i] <= rightPart[j]) {
      arr[k] = leftPart[i];
      i++;
    } else if (leftPart[i] > rightPart[j]) {
      arr[k] = rightPart[j];
      j++;
    }
    k++;
  }

  while (i < leftPart.length) {
    arr[k] = leftPart[i];
    i++;
    k++;
  }

  while (j < rightPart.length) {
    arr[k] = rightPart[j];
    j++;
    k++;
  }
}

let arr = [64, 25, 12, 22, 11];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); // Output: [11, 12, 22, 25, 64]
