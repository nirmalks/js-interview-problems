//TLE - O(N2)
function longestSuccessiveElements(arr) {
  const size = arr.length;
  let longest = 1;

  for (let index = 0; index < size; index++) {
    const element = arr[index];

    let count = 1;

    while (linearSearch(arr, x + 1) == true) {
      x += 1;
      count++;
    }

    longest = Math.max(count, longest);
  }

  return longest;
}
