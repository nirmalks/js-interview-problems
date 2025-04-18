function linearSearch(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (el === array[i]) {
      return i;
    }
  }
  return -1;
}
