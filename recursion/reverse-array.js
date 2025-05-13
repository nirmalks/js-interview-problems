function reverseArrExtraArr(arr) {
  const newArr = [];
  const n = arr.length;
  let j = 0;
  for (let i = n - 1; i >= 0; i--) {
    const el = arr[i];
    newArr[j++] = el;
  }

  return newArr;
}

const arr = [1, 2, 3, 4, 5];
const res = reverseArrExtraArr(arr);
console.log(res);

function reverseArrIterative(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

const iter = reverseArrIterative(arr);
console.log(iter);

function reverseArrRecursive(arr) {
  return helper(arr, 0, arr.length - 1);
}

function helper(arr, left, right) {
  if (left >= right) {
    return arr;
  }

  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return helper(arr, left + 1, right - 1);
}
const arr2 = [1, 2, 3, 4, 5];
const rec = reverseArrRecursive(arr2);
console.log(rec);
