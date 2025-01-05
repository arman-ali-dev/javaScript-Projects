const enteredPin = document.getElementById("enteredPin");
const pinError = document.getElementById("pinError");

const enteredAmount = document.getElementById("enteredAmount");
const amountError = document.getElementById("amountError");

const depositBtn = document.getElementById("depositBtn");
const popUp = document.querySelector(".pop-up");

enteredPin.addEventListener("keyup", () => {
  if (enteredPin.value.length > 6) {
    enteredPin.value = enteredPin.value.slice(0, 6);
  }
  pinError.textContent = "";
});

enteredAmount.addEventListener("keyup", () => (amountError.textContent = ""));

depositBtn.addEventListener("click", (event) => {
  let accounts = JSON.parse(localStorage.getItem("Accounts"));
  let username = JSON.parse(localStorage.getItem("Current User"));
  let currentAccount = accounts.filter(
    (element) => element.username == username
  )[0];

  if (enteredPin.value == "") {
    pinError.textContent = "Please enter your pin";
  } else if (enteredPin.value != currentAccount.pin) {
    pinError.textContent = "Invalid Pin";
  } else {
    if (enteredAmount.value == "") {
      amountError.textContent = "Please enter your amount";
    } else if (enteredAmount.value <= 0) {
      amountError.textContent = "Invalid amount!";
    } else {
      currentAccount.balance = currentAccount.balance + +enteredAmount.value;
      localStorage.setItem("Accounts", JSON.stringify(accounts));
      popUp.classList.add("openPopup");
    }
  }

  event.preventDefault();
});
