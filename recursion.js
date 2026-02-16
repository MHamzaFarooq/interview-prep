// Fibonacci sequence using recursion

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }
// console.log(fib(4));

// Intersection of two arrays

function intersection(nums1, nums2) {
  let temp1 = [...new Set([...nums1])];
  let temp2 = [...new Set([...nums2])];
  let result = [];

  for (let item of temp1) {
    if (temp2.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// practiced recursion with factorial
// sliding window technique with max sum of subarray of size k
// two pointer technique with sorted array to find pair with given sum
