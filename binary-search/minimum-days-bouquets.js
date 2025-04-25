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
  let left = min;
  let right = max;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (possible(bloomDay, mid, m, k)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

function possible(bloomDay, day, m, k) {
  let size = bloomDay.length;
  let count = 0;
  let bouquets = 0;

  for (let i = 0; i < n; i++) {
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
