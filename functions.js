// Basics of Fucntions

// fucntions are a code block that can be reused multiple times throughout a program
// Local variables are the variables declared inside a function
// outer variables are the variables declared outside a function and the fucntion can access them

// it is a good practice to minimize the use of outer variables inside functions to avoid unintended side effects

// when a function is called, a new execution context is created for that function

// argument - values that are passed inside of a fucntion when it is called
// parameter - variables that are present isnide the curly braces of a function declaration

// functions returns undefined if we return nothing from them.

// ---------exercises---------

// function pow(num, power) {
//   for (let i = 1; i < power; i++) {
//     num *= num;
//   }
//   return num;
// }
// console.log(pow(1, 2));

// function declaration and function expression
// function declaration
// function greet() {
//   console.log("Hello World");
// } are hoisted

// function expression
// const greet = function() {
//   console.log("Hello World");
// } are hoisted in tdz

// recursive function - a function that calls itself

// function factorial(num) {
//   // base case
//   num === 0 ? (return 1) : return num * factorial(num - 1);

// }
// console.log(factorial(10)); // 3628800

// rest parameters - allows a function to accept an indefinite number of arguments as an array

// function sum(a, b, ...args) {
//   return args
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
// for short - rest takes the remaining arguments and puts them in an array.

// function sum(...args) {
//   return Math.max(...args);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 10

// fucntions are objects and have properties and methods
// fucntion.name - returns the name of the function
// fucntion.length - returns the number of parameters the function expects

// NFE - named function expression is used in recursion.

// function sum(n) {
//   return sum;
// }

// console.log(sum(1)(2));

// Palindrome number

function isPalindrome(num) {
  let numToStr = String(num);
  let reversedStr = numToStr.split("").reverse().join("");
  return numToStr === reversedStr;
}
console.log(isPalindrome(1211)); // true
