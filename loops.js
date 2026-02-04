// Basic loops

//  While loop

// while condition is true, execute the code block

// let count = 10;
// while (count) {
//   // we can also use truthy values in condition
//   console.log("first");
//   count--;
// }
// console.log("While loop ended");

// Do...while loop
// similar as while but the condition is run atleast once regardless of the condition

// for loop
// i laready mastered it millions of times

// for (let i = 10; i; i--) {
//   console.log(i);
// }

// we can ommit parts of for loop
// let i = 10;
// for (; i; ) {
//   console.log(i);
//   i--;
// }
// console.log("For loop bro");

// breaking a loop - use break
// skipping the iteration - use continue
// important in if conditions using ?, continue, break are not allowed
// labels - used to name a loop to break or continue outer loops
// outer: for (let i = 0; i < 3; i++) {
//   console.log(`i = ${i}`);
//   inner: for (let j = 0; j < 3; j++) {
//     if (j === 2) continue outer;
//     console.log(`   j = ${j}`);
//   }
// }
// console.log("Loop ended");

// Exercises
// let i = 0;
// while (i++ < 5) console.log(i);
// for (let i = 0; i < 5; ++i) console.log(i);

// output even numbers from 2 to 10
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }
// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// prime numbers
// for (let i = 2; i <= 50; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break; // It's divisible by another number, so not prime
//     }
//   }

//   if (isPrime) {
//     console.log(i); // Outputs: 2, 3, 5, 7
//   }
// }

//  Operators
// + is the only operator that can do both addition and concatenation
// other operators work with numbers only
// let i = 1;
// console.log(undefined + 1);

// for...in is used to iterate over the properties of an object (holds keys name)
// for...of is used to iterate over iterable objects like arrays, strings (holds values)

// reverse a string problem

let s = ["H", "a", "n", "n", "a", "h"];

function reverseArray(s) {
  let startPointer = 0;
  let endPointer = s.length - 1;
  for (; startPointer < endPointer; startPointer++, endPointer--) {
    [s[startPointer], s[endPointer]] = [s[endPointer], s[startPointer]];
  }
  return s;
}
console.log(reverseArray(s));
