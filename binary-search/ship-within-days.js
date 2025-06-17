/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = 0;
  let sum = 0;

  for (let i = 0; i < weights.length; i++) {
    left = Math.max(left, weights[i]);
    sum += weights[i];
  }

  let right = sum;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isFeasible(weights, mid, days)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function isFeasible(weights, capacity, days) {
  let daysTaken = 1;
  let total = 0;
  for (let i = 0; i < weights.length; i++) {
    if (total + weights[i] > capacity) {
      daysTaken++;
      total = weights[i];
    } else {
      total += weights[i];
    }

    if (daysTaken > days) {
      return false;
    }
  }

  return true;
}
