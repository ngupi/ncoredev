function maxGained(prices) {
  let profit = 0;
  let presentDay = prices.length - 1;

  while (presentDay > 0) {
      let day = presentDay - 1;

      while (day >= 0 && prices[presentDay] > prices[day]) {
          profit += (prices[presentDay] - prices[day]);
          day--;
      }
      presentDay = day;
  }
  return profit;
}
const example1 = [2, 3, 5];
const example2 = [8, 5, 1];

console.log("Example 1 Maximum Profit:", maxGained(example1)); // Output: 5
console.log("Example 2 Maximum Profit:", maxGained(example2)); // Output: 0
