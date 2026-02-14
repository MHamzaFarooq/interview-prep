// const dogAge = [2, 3, 4, 5, 6];

// const dogAgeInHumanYears = dogAge
//   .map((x) => {
//     if (x <= 2) {
//       return x * 2;
//     } else {
//       return 16 + x * 4;
//     }
//   })
//   .filter((x) => x >= 18);
// const avgHumanAge =
//   dogAgeInHumanYears.reduce((acc, age) => acc + age, 0) /
//   dogAgeInHumanYears.length;
// console.log(dogAgeInHumanYears);
// console.log(avgHumanAge);

// flat method
// removes the nested array and creates a single array with all the elements
// const arr = [1, 2, [3, 4], [5, 6], [[7, 8], 9]];
// const flatArr = arr.flat();

// but if we have more than one level of nesting, we can use the flat method with a depth parameter
// const arr = [1, 2, [3, 4], [5, 6], [[7, 8], 9]];
// const flatArr = arr.flat(2);
// console.log(flatArr);

// flatMap method
// it is a combination of map and flat methods
// it can't go 2 levels deep like flat method, it can only go 1 level deep

// we can createempty array by using new Array() constructor method and if we want to fill it up with let's say 0, we can use fill method

// Objects

// const user1 = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 30, city: "San Francisco" },
//   { name: "Charlie", age: 35, city: "Los Angeles" },
// ];
// // Object.freeze(users[0]);
// // users[0].name = "John";
// // console.log(Object.values(users[0]));

// const user2 = { ...user1 };
// console.log(user2);

//

// function maxProfit(prices) {
//   let minPrice = Math.min(...prices);
//   let minIndex = prices.indexOf(minPrice);
//   let maxProfit = 0;
//   for (let i = minIndex + 1; i < prices.length; i++) {
//     if (prices[i] > minPrice) {
//       if (maxProfit < prices[i] - minPrice) {
//         maxProfit = prices[i] - minPrice;
//       }
//     }
//   }
//   return maxProfit;
// }
// console.log(maxProfit(prices));
// don't work for initial values
const prices = [7, 1, 5, 3, 6, 4];
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}

console.log(maxProfit(prices));
