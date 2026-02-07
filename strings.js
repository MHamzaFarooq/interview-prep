// for storing characters.

// can use '', "", ``

// can use \ to escape characters

// .at method can be used to access characters in a string

// in .at method, negative numbers can be used to access characters from the end of the string

// strings are immutable - can't change the characters in a string

// strings methoods
// indexOf - can accept a second argument to specify the starting index for the search - returns -1 if not found
// lastIndexOf - can accept a second argument to specify the starting index for the search - returns -1 if not found

// includes - can accept a second argument to specify the starting index for the search - returns true or false
// startsWith - can accept a second argument to specify the starting index for the search - returns true or false
// endsWith - can accept a second argument to specify the length of the string to search - returns true or false

// slice method
// accepts 2 args - start and end - if end not present, it returns till the end of an string
// console.log("first".slice(0, 2));
// substring method - similar to slice but doesn't accept negative numbers - start and end are swapped if start is greater than end

// strings are compared based on their unicode values
// num = 26;
// console.log(num.toString(64));

// to compare strings according to the letters use localeCompare methog

// console.log("a".localeCompare("A"));

// -----------------Exercises------------------
// console.log("hamza"[0].toUpperCase() + "hamza".slice(1));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue("$120"));

function isAnagram(s, t) {
  let isAnagram = false;
  let sArr = [...s];
  let tArr = [...t];

  if (sArr.length !== tArr.length) {
    return isAnagram;
  }

  for (let i = 0; i < s.length; i++) {
    if (tArr.indexOf(s[i]) !== -1) {
      tArr.splice(tArr.indexOf(s[i]), 1);
      isAnagram = true;
    } else {
      return (isAnagram = false);
    }
  }
  return isAnagram;
}

console.log(isAnagram("aacc", "ccac"));
