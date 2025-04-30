var findKthPositiveLinearComplexity = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      console.log(arr[i], k);
      k++;
    } else {
      break;
    }
  }
  return k;
};
