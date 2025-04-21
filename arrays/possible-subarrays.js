function subarraysBruteForce(arr, total) {
  const size = arr.length;
  const sub = [];
  let len = 0;
  for (let i = 0; i < size; i++) {
    let sum = 0;
    for (let j = i; j < size; j++) {
      sub.push([arr[i], arr[j]]);

      sum += arr[j];

      if (sum == total) {
        console.log(sum);
        console.log(j, i);
        for (let i = 0; i <= j; i++) {
          console.log(arr[i]);
        }
        console.log(arr[j], arr[i]);
        len = Math.max(len, j - i + 1);
      }
    }
  }

  return len;
}

// const res = subarraysBruteForce([2, 3, 5], 10);
// console.log(res);

function subarraysMap(arr, total) {
  const size = arr.length;
  const prefixMap = new Map();
  let len = 0;
  let sum = 0;
  let maxLen = 0;
  let rem = 0;
  for (let i = 0; i < size; i++) {
    const num = arr[i];
    sum += num;

    if (sum == total) {
      maxLen = Math.max(maxLen, i + 1);
    }

    rem = sum - total;
    if (prefixMap.has(rem)) {
      len = i - prefixMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    if (!prefixMap.has(sum)) {
      prefixMap.set(sum, i);
    }
  }

  return maxLen;
}

const resmap = subarraysMap([2, 3, 5], 10);
// console.log(resmap);

function subarraysSliding(arr, total) {
  const size = arr.length;

  let sum = arr[0];
  let maxLen = 0;
  let left = 0;
  let right = 0;

  while (right < size) {
    while (left <= right && sum > total) {
      sum -= arr[left];
      left--;
    }

    if (sum == total) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    if (right < size) {
      right++;
      sum += arr[right];
    }
  }

  return maxLen;
}

const resSliding = subarraysSliding([2, 3, 5], 10);
console.log(resSliding);
