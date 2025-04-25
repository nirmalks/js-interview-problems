/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  if (num == 1) {
    return true;
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let sq = mid * mid;
    if (sq == num) {
      return true;
    } else if (sq > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
