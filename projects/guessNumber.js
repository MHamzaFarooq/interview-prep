function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}
function checkGuess(guessNumber, randomNumber) {
  if (guessNumber == randomNumber) {
    document.querySelector("#result").textContent =
      "Congratulations! You guessed the number!";
  } else if (guessNumber > randomNumber) {
    document.querySelector("#result").textContent = "Too high!";
  } else {
    document.querySelector("#result").textContent = "Too low!";
  }
}

document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector("#heading").textContent = "Guess the Number!";
  document.querySelector("#startButton").style.display = "none";
  document.querySelector("#guessNumber").style.display = "block";

  document.querySelector("#submitButton").style.display = "block";
});
const randomNumber = generateRandomNumber();

document.querySelector("#submitButton").addEventListener("click", function () {
  const guessNumber = document.querySelector("#guessNumber").value;
  checkGuess(guessNumber, randomNumber);
});
