/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profits = [];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        let currentProfit = prices[j] - prices[i];
        profits.push(currentProfit);
      }
    }
  }
  //   console.log("Profits", profits);
  console.log(Math.max(...profits));
};

maxProfit([7, 1, 5, 3, 6, 4]);
