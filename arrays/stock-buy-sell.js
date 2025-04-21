/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < prices.length; i++) {
    let profit = prices[i] - minPrice;
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    maxProfit = Math.max(profit, maxProfit);
  }
  if (maxProfit < 0) {
    return 0;
  }
  return maxProfit;
};
