let minNumber = 1;
let maxNumber = 10;
let maxAttampts = 5;

let output = document.getElementById("output");
let randomNumber = generateRandomNumber();
let bestScore = maxAttampts;
let curerntAttempts = 0;

document.getElementById("guessBtn").addEventListener("click", () => {
  let enteredNumber = parseInt(document.getElementById("enteredNumber").value);
  curerntAttempts++;
  if (
    !isNaN(enteredNumber) &&
    enteredNumber >= minNumber &&
    enteredNumber <= maxNumber
  ) {
    checkGuess(enteredNumber);
  } else {
    output.style.color = "rgb(255 0 0)";
    output.textContent = "Please Enter A Number Between 1 And 10.";
  }
  document.getElementById(
    "attemptCount"
  ).textContent = `${curerntAttempts}# Of Times You've Guessed.`;
  if (curerntAttempts === 5) {
    endGame();
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  resetGame();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function checkGuess(enteredNumber) {
  let difference = Math.abs(enteredNumber - randomNumber);
  output.style.color = "rgb(255 0 0)";
  if (randomNumber === enteredNumber) {
    output.style.color = "rgb(8 175 8)";
    output.textContent = "Congratulation You've Won This Game.";

    if (curerntAttempts < bestScore) {
      bestScore = curerntAttempts;
      document.getElementById("score").textContent = bestScore;
    }
  } else if (difference <= 2) {
    output.textContent = "Yor're Very Close To Actual Number.";
  } else {
    output.textContent =
      "You're more than 2 units away from the actual number.";
  }
}

function resetGame() {
  output.style.color = "rgb(8 175 8)";
  output.textContent = "If Your Number Is Correct, So You Win.";
  document.getElementById("attemptCount").textContent =
    "0# Of Times You've Guessed";
  curerntAttempts = 0;
  enteredNumber.value = "";
  randomNumber = generateRandomNumber();
}

function endGame() {
  output.textContent = "Game Over";
  enteredNumber.disabled = true;
  document.getElementById("guessBtn").disabled = true;
}
