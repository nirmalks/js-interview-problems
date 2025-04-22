/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let top = 0;
  let right = m - 1;
  let bottom = n - 1;
  let left = 0;
  const result = [];
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let j = top; j <= bottom; j++) {
      result.push(matrix[j][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }
    bottom--;

    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        result.push(matrix[j][left]);
      }
    }
    left++;
  }

  return result;
};
