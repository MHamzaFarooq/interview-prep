// the values stored in the variables are of different data types

// there are eight differenct data tupes in javascript
// 1. Number - represents both integer and floating point numbers
// beside numbers we have special neumeric value infinity, -infinity and NaN

// NaN is sticky any operation on it will return NaN

//  Number type can store really big integers up to a limit we use BigInt type for larger integers
let bigIntNumber = 1234567890123456789012345678901234567890n; // note the n at the end

// 2. String - to store text data we use string data type
let stringData = "Hello, World!";

// three ways to to create a string "", '', ``

// 3. Boolean - represents logical entity and can have two values: true and false
let isJavaScriptFun = true;
let isFishTasty = false;

// 4. Null - represents the intentional absence of any object value
// it dones not point to any memory location, it just stores nothing in a variable.

// 5. undefined - a variable that has been declared but not assigned a value is of type undefined
// it is a special reserved word in javascript, when we declare a variable without assigning it, js stores the value "undefined" in it.

// 6. Symbol - used to create unique identifiers for objects

// typeof operator can be used to check the data type of a variable

console.log(typeof 42); // "number"
console.log(typeof "Hello");
console.log(typeof Symbol("id")); // "symbol"

// Important gotcha about null
// if we check type of null, it gives us object even tho null is not an object, it is just a bug in javascript.

// 7 Primitive Datatypes
// number, string, boolean, null, undefined, bigInt, symbol

// 8. Object - used to store collections of data and more complex entities
let person = {
  name: "Alice",
  age: 30,
};

// functions are also a type of object in javascript
function greet() {
  console.log("Hello!");
}

// Objects are created using {} curly braces and can hold multiple key-value pairs

// Interesting fact, when we execute a primitive, a special object wrapper is created which provides it additional methods and properties and then this object is destroyed after the operation is complete

// Example:
// let str = "Hello";
// here a temporary String object is created to provide access to string methods
// console.log(str.toUpperCase()); // "HELLO"

// objects are truthy, all non-primitive data types are objects

// null and undefined have no methods

// -----------------------EXERCISE PRIMITIVE TYPE-----------------------

let str = "Hello";
str.test = 5;
console.log(str.test);

// Numbers

// we already now int and bitInt

// we have a special way of writing a number using e to avoide writing many zeros
let largeNumber = 1e6; // 1 million
console.log(largeNumber);

let smallNumber = 34e-6; // 0.000001
console.log(smallNumber);

// we can also write _ between digits which will be ignored
const budget = 1_000_000_000;
console.log(budget);

// toString()
let num = 45;

console.log(num.toString(8));

// Rounding numbers

// Math.floor() - rounds down
// 3.7 becomes 3, -3.7 becomes -4, 0.3 becomes 0s

// Math.ceil() - rounds up
// 3.3 becomes 4, -3.3 becomes -3, 0.3 becomes 1

//  Math.round() - rounds to the nearest integer
// 3.5 becomes 4, 3.4 becomes 3, -3.5 becomes -3

// Math.trunc() - removes the decimal part
// 3.9 becomes 3, -3.9 becomes -3

// if we want to have a fixed amount of decimals we use toFixed() method it gives a string back.
let number = 3.14159;
console.log(number.toFixed(2)); // "3.14"

// gotchas if we have 12.44 and we perfoem toFixed(1) it will give rounded up value

console.log((12.75).toFixed(1));

// parseInt() and parseFloat()
// Numeber() and + operator can't read strings but if let's say we need to read a string in to a number like 12px we use parseInt(), it read and returns the number until it encounters a non-numeric character

// Some important math functions
// math.random() - returns a number 0 < 1
// math.max(), math.min() - returns the max and min value from a set of numbers
// math.pow(base, exponent) - returns base raised to the power of exponent
// math.sqrt() - returns the square root of a number

// Numbers Exercise

// Strings

// Strings are immutable in javascript

// .indexOf(subStr, pos) - returns the index of the first occurrence of a substring, -1 if not found

// let message = "Hello, welcome to the world of JavaScript dog";
// let pos = 0;
// while (true) {
//   found = message.indexOf("nigger", pos);
//   if (found === -1) break;
//   console.log(`Found at index: ${found}`);
//   pos = found + 1;
// }

// ----------------String Exercise-----------------

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// function truncate(str, maxLength) {
//   let temp;
//   if (str.length > maxLength) {
//     temp = str.slice(0, maxLength - 3) + "…";
//   }
//   return temp;
// }
// let testStr = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenedsfsdfre animi consectetur pariatur dolorum reprehenderit. In necessitatibus dolor, maiores atque, quasi illo quidem vitae sequi mollitia ipsum suscipit aliquam at labore, cum non. Quos reiciendis repellendus sit eligendi aspernatur quibusdam alias!`;
// console.log(truncate(testStr, 90).length);

let cost = "$120";
console.log(+cost.slice(1));

// Arrays
// are objects but used for ordered data

// common methods
// shift, unshift, push, pop, slice, splice
// shift, unshift are slower than push and pop

// loping through arrays
// for..of for arrays and for...in for objects

let fruits = ["Apple", "Banana", "Cherry"];
for (let items of fruits) {
  console.log(items.toUpperCase());
}

// array.length we can empty the arary liek
fruits.length = 0;
// console.log(fruits);

// ----------------Array Exercise-----------------

// let styles = ["Jazz", "Blues", "blah", "blah"];
// styles.push("Rock-n-Roll");

// function insertMiddle(arr, element) {
//   if (arr.length % 2 !== 0) {
//     arr[Math.floor(arr.length / 2)] = element;
//     return arr;
//   }
//   return "the array length is not odd";
// }

// console.log(insertMiddle(styles, "Classics"));

//a maximal subarray
// function getMaxSubSum(arr) {
//   let maxSub = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let subSum = 0;
//     for (let j = i; j < arr.length; j++) {
//       subSum = subSum + arr[j];
//       if (maxSub < subSum) {
//         maxSub = subSum;
//       }
//     }
//   }
//   return maxSub;
// }

// console.log(getMaxSubSum([-1, 2, 3, -9]));

// Two sum

let twoSum = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([4, 7, 2, 15], 9));
