// index based data structure

// at is the lastest addition to array prototype
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.at(-2));

// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits.shift());
// console.log(fruits);

// common operation on arrays are push, pop, shift, unshift
// push, pop - end of the array - less expensive
// shift, unshift - start of the array - more expensive

// arrays are passed by reference

// const array = new Array();
// array[100] = "hello";
// console.log(array.length); // 101

// arrays offer for...of loops

// let fruits = ["apple", "banana", "cherry"];
// for (items of fruits) {
//   console.log(items);
// }

// Array has another syntax of creating it
// new Array(size) only if we pass a signle number

// array has toString method - converts the array to strings with commas

// array's shouldn't be compared with ==
// arr = [1, 2, 3];
// arr2 = arr;
// console.log(arr == arr2);

//---------------Exercises------------------

// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let shoppingCart = fruits;
// shoppingCart.push("fig", "grape");

// console.log(fruits.length); // 7

// styles = ["jazz", "blues", "pop", "drip"];

// styles.push("rock-n-roll");

// styles.length % 2 !== 0
//   ? (styles[Math.floor(styles.length / 2)] = "classics")
//   : console.log("array is of even length");
// console.log(styles);

// leet code - remove duplicates from sorted array

function removeDuplicates(num) {
  let orignalLength = num.length;
  let uniqueArr = new Set(num);
  let newArr = [...uniqueArr];
  let number = newArr.length;

  if (number < orignalLength) {
    let fillerArr = new Array(orignalLength - number).fill("_");
    let result = [...newArr, ...fillerArr];
    return result;
  } else {
    return newArr;
  }
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// correct approach - leet code

// var removeDuplicates = function (nums) {
//   let i = 0;

//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       nums[i + 1] = nums[j];
//       i++;
//     }
//   }
//   return nums;
// };

// console.log(
//   removeDuplicates([
//     0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4,
//   ]),
// );
