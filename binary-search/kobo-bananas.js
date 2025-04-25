var minEatingSpeed = function (piles, h) {
  let max = findMax(piles);

  let left = 0;
  let right = max;
  let min = right;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let hours = calculateMaxHours(piles, mid);
    if (hours <= h) {
      min = Math.min(min, hours);
    }
  }

  return min;
};

function findMax(piles) {
  let max = -Infinity;
  for (let index = 0; index < piles.length; index++) {
    const element = array[index];
    max = Math.max(max, element);
  }

  return max;
}

function calculateMaxHours(piles, n) {
  let totalHours = 0;
  for (let i = 0; i < n; i++) {
    totalHours += Math.ceil(piles[i] / n);
  }

  return totalHours;
}
