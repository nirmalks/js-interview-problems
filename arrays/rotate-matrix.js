var rotate = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const arr = Array.from({ length: n }, () => Array(m));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[j][n - 1 - i] = matrix[i][j];
    }
  }

  return arr;
};

const res = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(res);
