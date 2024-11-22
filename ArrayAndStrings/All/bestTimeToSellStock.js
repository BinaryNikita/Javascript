/* 
Best Time to Buy and Sell Stock
Input: prices = [7, 1, 5, 3, 6, 4]
Output: 5
Explanation: Buy at prices[1] = 1 and sell at prices[4] = 6.
*/

let prices = [7, 1, 5, 3, 6, 4];
let results = [];
if (prices.length > 1) {
  for (let i = 0; i < prices.length; i++) {
    for (let j = prices.length - 1; j > i; j--) {
      let a = prices[j] - prices[i];
      if (a >= 0) {
        results.push({
          buyDay: i + 1,
          sellDay: j + 1,
          profit: a,
        });
      }
    }
  }
  let profit = results[0].profit;

  for (let i in results) {
    if (results[i].profit > profit) {
      profit = results[i].profit;
    }
  }

  for (let e in results) {
    if (results[e].profit == profit) {
      console.log(results[e]);
    }
  }
} else {
  console.log("No sell day available");
}


//let prices = [7, 1, 5, 3, 6, 4];
// let minPrice = Infinity;
// let maxProfit = 0;

// for (let price of prices) {
//   if (price < minPrice) {
//     minPrice = price; 
//   } else if (price - minPrice > maxProfit) {
//     maxProfit = price - minPrice; 
// }

// console.log(maxProfit); 
