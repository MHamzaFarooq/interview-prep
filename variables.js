"use strict";
// We use let keyword to create a variable
// variable is the name assigned to the memrory location where value is stored
let variable = "I am a variable";

// we can declare multiple cariables in a single line but it's not a good practice
let var1 = 10,
  var2 = 20,
  var3 = 30; // X

// we can reassign the value to the variable as many times as we want
variable = "I have been changed";

// we can't declare a variable more than once with let keyword
// let variable = "This will cause an error"; // X

// the variable name can have digit, symbols, or letter but it can't start with a digit
let _variable1 = "Valid variable name"; // OK
let $variable2 = "Also a valid variable name"; // OK
// let 1variable = "Invalid variable name"; // X

// & _ can also be a variable name on their own
let _ = "Underscore as variable name";
let $ = "Dollar sign as variable name";

// following are some invalid variable names
// let my-variable = "Invalid because of hyphen"; // X
// let var@name = "Invalid because of special character"; // X
// let function = "Invalid because it's a reserved keyword"; // X

// Variables names are case-sensitive

//  there are some reserved keywords like class, fucntion, let ,const etc which can't be used as variable names

// const keyword is used to declare a constant variable whose value can't be changed once assigned
const constantVariable = "I am constant";
// constantVariable = "Trying to change will cause an error"; // X

// There is a convention to use uppercase variable name for a consdtant variable whose value is known before execution but if we want a variable whose value will be calculated during execution but shouldn't be changed later we can use const with regular variable naming conventions
// const PI = 3.14;
const COLOR_RED = "#FF0000";

// IMPORTANT: All variable names must have a meaningful name that reflects the value it holds
let userAge = 25;
let userName = "John Doe";

// variables are good not evil, they won't create performance issues.

// -----------------------SUMMARY-----------------------

// 1. let - modern way of variable declaration
// 2. const - same as let but can't be reassigned.
// 3. var - old school way of variable declaration, avoid using it.

// -----------------------EXERCISE-----------------------

let admin;
let name = "John";
admin = name;
console.log(admin);

let planetEarth = "Earth";
let currentVisitor = "Guest";
console.log(planetEarth, currentVisitor);

const BIRTHDAY = "01.01.2000";
const PI = 3.14;
console.log(BIRTHDAY, PI);
