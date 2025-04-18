let nums1 = [1, 2, 3, 4, 5];
let nums2 = [1, 2, 7];

function union(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;
  const size = result.length - 1;
  while (i < arr1.length && j < arr2.length) {
    const val1 = arr1[i];
    const val2 = arr2[j];
    if (val1 == val2) {
      if (result[size] != val1) {
        result.push(val1);
      }
      i++;
      j++;
    } else if (val1 < val2) {
      if (result[size] != val1) {
        result.push(val1);
      }
      i++;
    } else {
      if (result[size] != val2) {
        result.push(val2);
      }
      j++;
    }
  }

  while (i < arr1.length) {
    const val1 = arr1[i];
    if (result[size] != val1) {
      result.push(val1);
    }
    i++;
  }

  while (j < arr2.length) {
    const val1 = arr2[j];
    if (result[size] != val1) {
      result.push(val1);
    }
    j++;
  }

  return result;
}

const res = union(nums1, nums2);
console.log(res);
