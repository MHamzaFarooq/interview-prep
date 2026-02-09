// forEach method implementation

// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach((element, index) => {
//   console.log(`Element at index ${index}: ${element}`);
// });

// for checking if somehting exists in an array, includes is preferred over indexOf

// find()

// const arrObj = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4 },
//   { id: 5, name: "Claire" },
// ];

// find returns the first element that satisfies the condition, if no element is found it returns undefined
// const foundElement = arrObj.find((element) => element.name === "Bob");
// console.log(foundElement.id);

// findIndex()

// findIndex returns the index of the first element that satisfies the condition, if no element is found it returns -1
// const foundIndex = arrObj.findIndex((element) => element.name === "Bob");
// console.log(foundIndex);

// filter()
//return a new array with all the elements that satisfy the condition, if no element is found it returns an empty array

// const filteredArray = arrObj.filter((element) => element.name?.includes("C"));
// console.log(filteredArray);

// map()
// map returns a new array with the results of calling a provided function on every element in the calling array

// const arrObj = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 2, name: "David" },
//   { id: 5, name: "Claire" },
// ];
// const foundElement = arrObj.find(function (item, index, array) {
//   console.log(item, index, array);
// });

// console.log(foundElement);

// reduce()
// it is a method to calculate a single result based on the array.

// syntax - arr.reduce(function(accumulator, item, index, array),[initialValue])
// accumulator is a result of the previous function call.

// const sum = arrObj.reduce((accu, item) => {
//   return "-" + accu + item.name;
// }, "");

//at method returs the value at a passed index.

// const sum = arrObj.at(3);

// console.log(sum);

// some is a method that checks if at least one element in the array satisfies the condition, it returns true if at least one element satisfies the condition, otherwise it returns false.

// console.log(arrObj.some((item) => item.id === 2));
// every is a method that checks if all elements in the array satisfy the condition, it returns true if all elements satisfy the condition, otherwise it returns false.

function moveZeroes(nums) {
  let lastNonZerotIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZerotIndex], nums[i]] = [nums[i], nums[lastNonZerotIndex]];
      lastNonZerotIndex++;
    }
  }
}
nums = [0, 0, 1];
moveZeroes(nums);
console.log(nums);
