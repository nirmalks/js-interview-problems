var minDays = function (bloomDay, m, k) {
  let flowers = m * k;
  let size = bloomDay.length;

  if (flowers > size) return -1;

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < size; i++) {
    min = Math.min(min, bloomDay[i]);
    max = Math.max(max, bloomDay[i]);
  }

  for (let i = min; i <= max; i++) {
    if (possible(bloomDay, i, m, k)) {
      return i;
    }
  }

  return -1;
};

function possible(bloomDay, day, m, k) {
  let size = bloomDay.length;
  let count = 0;
  let bouquets = 0;

  for (let i = 0; i < size; i++) {
    if (bloomDay[i] <= day) {
      count++;
    } else {
      bouquets += Math.floor(count / k);
      count = 0;
    }
  }
  bouquets += Math.floor(count / k);
  return bouquets >= m;
}
