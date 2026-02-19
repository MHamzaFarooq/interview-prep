const arr1 = [
  [1, 2],
  [3, 4],
];

// console.log(arr1.flat());
const arr2 = arr1.flatMap((item) => item * 2);
console.log(arr2);
