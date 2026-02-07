// Slice method returns a copy of the array.
// const arr = [1, 2, 3, 4, 5];
// const slicedArr = arr.slice(-2, -1);
// console.log(slicedArr, arr);

// Splice method changes the original array - 1st argument is the index to start from, 2nd argument is the number of elements to remove, and the rest are the elements to add.
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2);
// console.log(arr);

// Sets work on iterables and they only store unique values. They are not ordered and they are not indexed.

// const mySet = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 2, 3, 5, 32, 5]);
// console.log([...mySet]);
// fast for searching

// Maps are also iterables and they store key-value pairs. They are ordered and they are indexed. They can have any type of keys and values.

// const myMap = new Map([
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
//   [4, "four"],
//   [5, "five"],
// ]);

// for (const [key, value] of myMap.entries()) {
//   console.log(key, value);
// }

// longest pre-fix problem

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
