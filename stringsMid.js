// function lengthOfLongestSubstring(s) {
//   if (s === " " || s.length == 1) {
//     return 1;
//   } else if (s.length === 0) {
//     return 0;
//   }
//   let longestSubStr = "";
//   let currSubStr = "";
//   let nestedLoop = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (currSubStr.includes(s[i])) {
//       if (currSubStr.length > longestSubStr.length) {
//         longestSubStr = currSubStr;
//       }
//       currSubStr = "";
//     } else {
//       currSubStr += s[i];
//     }
//     if (i === s.length - 1) {
//       ++nestedLoop;
//       i = nestedLoop;
//     }
//   }
//   return longestSubStr.length > currSubStr.length
//     ? longestSubStr.length
//     : currSubStr.length;
// }

function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxSize = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    maxSize = Math.max(maxSize, right - left + 1);
  }

  return maxSize;
}

let s = "dvdf";

console.log(lengthOfLongestSubstring(s));
