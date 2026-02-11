// main character of javascript

// can be created using new keyword and simple {}

// works on a principle of key, value pairs

// new Object() vs {}
// just use {} as it is more efficient and less code

// const user = {};
// user.name = "jonny"; // with . we can add properties to the object
// delete user.name; // to delete a property from the object

// console.log(user);

// we can name a key like "first name" but we have to use [] to access it

// Property shorthand
// function createUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// we can have anything as a key of an object (even reserved keywords like function, return etc.)

// in keyword is used to check if a key exists in an object

// const test = {
//   fname: "jonny",
// };
// console.log("fname" in test);

// IMPORTANT
// In objects integer keys are not ordered meaning if we use a string like ,41,42,1 we print it out and see that 1 will be printed first then 41 and 42 because they are treated as strings and not integers. So the order of keys in an object is not guaranteed.
// to fix this gotcha, we simply put + before the number so they don't get converted.

// exercise

// checking if the object is empty or not

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule)); // true

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(sumSalaries(salaries)); // 390

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] === "number") {
//       menu[key] *= 2;
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// multiplyNumeric(menu);
// console.log(menu);

// intermediate concepts

// objects are reference types
// for example when we assign an object to another variable, we copy the address to that variable so if we change the variable, both will be affected because they point to the same object in memory

// {} === {} = false

// we can dupolicate an object using Object.assign() method
// const user = {
//   fname: "Hamza",
//   lname: "Farooq",
// };
// const testUser = { isGay: true };
// const user2 = {};
// Object.assign(user2, user, testUser);
// console.log(user2);

// if the property already exists in the target object, it will be overwritten by the source object

// Object.assign is a shallow copy like for arrays we do ... or slice()
// GOTCHA if we have an object inside an objectm, it will be copied by reference.
// for that we use structuredClone()
const user1 = {
  name: "Hamza",
  address: {
    city: "Lahore",
  },
};
const user2 = Object.assign({}, user1);
user2.address.city = "Karachi";
console.log(user1.address); // false
