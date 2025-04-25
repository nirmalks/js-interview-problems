/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeedBruteForce = function (piles, h) {
  let max = findMax(piles);

  for (let index = 0; index < max; index++) {
    const time = calculateTotalHours(piles, index);
    if (time <= h) {
      return index;
    }
  }

  return max;
};

function findMax(piles) {
  let max = -Infinity;
  for (let index = 0; index < piles.length; index++) {
    const element = piles[index];
    max = Math.max(max, element);
  }

  return max;
}

function calculateTotalHours(piles, hourly) {
  let totalHours = 0;
  let size = piles.length;

  for (let index = 0; index < size; index++) {
    totalHours += Math.ceil(piles[index] / hourly);
  }

  return totalHours;
}
