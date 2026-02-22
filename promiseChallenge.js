// function whereAmI(lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.countryName}`);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       const { region } = data[0];
//       console.log("Country region:", region);
//     })
//     .catch((err) => {
//       console.error("Error fetching location data:", err);
//     });
// }

// whereAmI(52.508, 12.3813);

// function createImage(imgPath){

// }

function letterCombinations(digits) {
  const list = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  if (digits.length === 0) return [];
  const result = [];

  function backtrack(combination, nextDigits) {}
}
