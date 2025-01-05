let minNumber = 1;
let maxNumber = 20;

let randomNumber = generateRandomNumber();
let output = document.getElementById("output");
let bestScore = 0;
let currentAttemp = 20;

document.getElementById("checkBtn").addEventListener("click", () => {
  let enteredNumber = parseInt(document.getElementById("enteredNumber").value);
  currentAttemp--;
  if (
    !isNaN(enteredNumber) &&
    enteredNumber >= minNumber &&
    enteredNumber <= maxNumber
  ) {
    checkGuess(enteredNumber);
    document.body.classList.add("bg-change");
    document.getElementById("score").textContent = `💯 Score: ${currentAttemp}`;
    if (currentAttemp === 0) {
      endGame();
    }
  } else if (enteredNumber > maxNumber || enteredNumber < minNumber) {
    output.textContent = "Enter Number Between 1 And 20.";
  } else {
    output.textContent = "No Number!";
  }
});

document.getElementById("againBtn").addEventListener("click", () => {
  randomNumber = generateRandomNumber();
  reset();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function checkGuess(enteredNumber) {
  if (enteredNumber === randomNumber) {
    output.textContent = "Correct Number!🎉";
    document.body.classList.add("bg-change2");
    document.getElementById("box").textContent = randomNumber;
    document.getElementById("checkBtn").disabled = true;
    document.getElementById("enteredNumber").disabled = true;
    if (currentAttemp > bestScore) {
      bestScore = currentAttemp;
      document.getElementById(
        "HighScore"
      ).textContent = `🥇 Highscore: ${bestScore}`;
    }
  } else if (enteredNumber > randomNumber) {
    output.textContent = "Number is higher📈";
  } else if (enteredNumber < randomNumber) {
    output.textContent = "Number is lower📉";
  }
}

function reset() {
  currentAttemp = 20;
  document.body.classList.remove("bg-change");
  document.body.classList.remove("bg-change3");
  document.body.classList.remove("bg-change2");
  enteredNumber.value = "";
  output.textContent = "Start guessing... 😁";
  document.getElementById("score").textContent = `💯 Score: 20`;
  document.getElementById("box").textContent = "?";
  document.getElementById("checkBtn").disabled = false;
  document.getElementById("enteredNumber").disabled = false;
  randomNumber = generateRandomNumber();
  console.log(randomNumber);
  return false;
}

function endGame() {
  document.body.classList.add("bg-change3");
  output.textContent = "You lost😭";
  enteredNumber.disabled = true;
  document.getElementById("checkBtn").disabled = true;
  document.getElementById("checkBtn").style.backgroundColor = "#ccc";
}

console.log(randomNumber);
