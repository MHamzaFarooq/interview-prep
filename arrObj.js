const dogAge = [2, 3, 4, 5, 6];

const dogAgeInHumanYears = dogAge
  .map((x) => {
    if (x <= 2) {
      return x * 2;
    } else {
      return 16 + x * 4;
    }
  })
  .filter((x) => x >= 18);
const avgHumanAge =
  dogAgeInHumanYears.reduce((acc, age) => acc + age, 0) /
  dogAgeInHumanYears.length;
console.log(dogAgeInHumanYears);
console.log(avgHumanAge);
