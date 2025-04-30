/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let nr = matrix.length;
  let nc = matrix[0].length;

  let row = 0;
  let col = nc - 1;

  while (row < nr && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }

  return false;
};
