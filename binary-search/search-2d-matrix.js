/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let nr = matrix.length;
  let nc = matrix[0].length;

  for (let i = 0; i < nr; i++) {
    let left = 0;
    let right = matrix[i].length;

    if (matrix[i][0] <= target && matrix[i][nc - 1] >= target) {
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (matrix[i][mid] == target) {
          return true;
        } else if (matrix[i][mid] > target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  }

  return false;
};
