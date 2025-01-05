let buttons = document.querySelectorAll(".ttt-btn");
let turn = true;
let playerXWinningCount = 0;
let playerOWinningCount = 0;
let tieCount = 0;
let roundCount = 1;
let roundDisplay = document.getElementById("roundDisplay");

let winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerTurn() {
  if (turn === true) {
    this.querySelector(".btn-text").innerHTML = "X";
    turn = false;
  } else {
    this.querySelector(".btn-text").innerHTML = "O";
    turn = true;
  }

  checkWinner();
  clickSound();
  this.removeEventListener("click", playerTurn);
}

function clickSound() {
  document.getElementById("clickSound").play();
}

buttons.forEach((button) => {
  button.addEventListener("click", playerTurn);
});

function checkWinner() {
  let isBoxFull = true;
  winnerCondition.forEach((pattern) => {
    let pos1 = buttons[pattern[0]].innerText;
    let pos2 = buttons[pattern[1]].innerText;
    let pos3 = buttons[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        document.getElementById("winSound").play();

        buttons[pattern[0]]
          .querySelector(".btn-text")
          .classList.add("scale-up");
        buttons[pattern[1]]
          .querySelector(".btn-text")
          .classList.add("scale-up");
        buttons[pattern[2]]
          .querySelector(".btn-text")
          .classList.add("scale-up");

        roundDisplay.classList.remove("scaleUp2");
        document.querySelectorAll(".btn-text").forEach((span) => {
          span.style.color = "#808080";
        });

        buttons.forEach((button) => {
          button.disabled = true;
        });

        turn = true;

        winningCountDown();
        isBoxFull = false;
        if (pos1 === "X") {
          playerXWinningCount++;
          document.getElementById("playerXWinning").textContent =
            playerXWinningCount;
          if (playerXWinningCount === 3) {
            winningMessage();
            roundDisplay.textContent = `Winner Is "X"`;
            document.getElementById("player-x").style.zIndex = "99";
          }

          return false;
        } else if (pos1 === "O") {
          playerOWinningCount++;
          document.getElementById("playerOWinning").textContent =
            playerOWinningCount;
          if (playerOWinningCount === 3) {
            winningMessage();
            roundDisplay.textContent = `Winner Is "O"`;
            document.getElementById("player-o").style.zIndex = "99";
          }

          return false;
        }

        return false;
      }
    } else {
      isBoxFull = false;
    }
  });

  if (isBoxFull) {
    document.getElementById("lossSound").play();

    document.body.classList.add("active");
    tieCount++;
    document.getElementById("tie").textContent = tieCount;
    document.getElementById("message").classList.add("position-set");
    document.querySelector("#message h2").textContent =
      "Your Game Is Tied, Wait 10 Seconds, The Game Will Start Again.";
    isBoxFull = false;
    roundDisplay.classList.remove("scaleUp2");

    buttons.forEach((button) => {
      button.disabled = false;
    });

    turn = true;

    countDown();
    return false;
  }
}

function winningCountDown() {
  setTimeout(() => {
    buttons.forEach((button) => {
      button.querySelector(".btn-text").innerText = "";
      button.addEventListener("click", playerTurn);
      button.disabled = false;
    });

    document.querySelectorAll(".btn-text").forEach((span) => {
      span.style.color = "#fff";
    });

    winnerCondition.forEach((pattern) => {
      buttons[pattern[0]]
        .querySelector(".btn-text")
        .classList.remove("scale-up");
      buttons[pattern[1]]
        .querySelector(".btn-text")
        .classList.remove("scale-up");
      buttons[pattern[2]]
        .querySelector(".btn-text")
        .classList.remove("scale-up");
    });
    if (document.getElementById("rounds") !== null) {
      roundCount++;
      document.getElementById("rounds").innerText = roundCount;
    }
    roundDisplay.classList.add("scaleUp2");
    document.getElementById("nextRoundSound").play();
  }, 2000);
}

let stopSetTimeout;
let stop;
function countDown() {
  let count = 10;
  stop = setInterval(() => {
    count--;
    document.getElementById("countDown").textContent = count;
    if (count === 0) {
      clearInterval(stop);
    }
  }, 1000);

  stopSetTimeout = setTimeout(() => {
    roundCount++;
    clearInterval(stop);
    document.getElementById("message").style.top = "-800px !important";
    buttons.forEach((button) => {
      button.querySelector(".btn-text").innerText = "";
      document.body.classList.remove("active");
      button.addEventListener("click", playerTurn);
    });
    document.getElementById("rounds").innerText = roundCount;
    roundDisplay.classList.add("scaleUp2");
    document.getElementById("nextRoundSound").play();
    document.getElementById("message").classList.remove("position-set");
  }, 10000);

  return;
}

function winningMessage() {
  document.getElementById("winSound").pause();
  document.body.classList.add("active");
  roundDisplay.classList.add("text-shadow");
  setTimeout(() => {
    buttons.forEach((button) => {
      button.querySelector(".btn-text").innerHTML = "";
      document.getElementById("finalWinnerSound").play();
    });
  }, 150);
  return;
}

function restartGame() {
  roundCount = 1;
  buttons.forEach((button) => {
    button.querySelector(".btn-text").innerHTML = "";
    button.addEventListener("click", playerTurn);
  });
  playerOWinningCount = 0;
  playerXWinningCount = 0;
  tieCount = 0;
  document.getElementById("playerXWinning").textContent = 0;
  document.getElementById("playerOWinning").textContent = 0;
  document.getElementById("tie").textContent = 0;
  document.getElementById("message").style.top = "-800px";
  document.body.classList.remove("active");
  clearTimeout(stopSetTimeout);
  roundDisplay.classList.remove("scaleUp2");
  document.body.classList.remove("active");
  turn = true;
  document.getElementById(
    "roundDisplay"
  ).innerHTML = `Round - <span id="rounds">${roundCount}</span>`;
  return false;
}

function reloadMessage() {
  document.body.classList.add("active2");
  document.getElementById("restart").style.zIndex = "0";
  document.getElementById("roundDisplay").innerHTML = "";
  document.getElementById("entryMessage").classList.add("showEntryMessage");
}

document.getElementById("agreeBtn").addEventListener("click", () => {
  document.body.classList.remove("active2");
  document.getElementById("restart").style.zIndex = "99";
  document.getElementById(
    "roundDisplay"
  ).innerHTML = `Round - <span id="rounds">${roundCount}</span>`;
  document.getElementById("entryMessage").classList.remove("showEntryMessage");
});
