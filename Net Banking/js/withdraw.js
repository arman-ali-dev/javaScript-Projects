const enteredPin = document.getElementById("enteredPin");
const pinError = document.getElementById("pinError");

const enteredAmount = document.getElementById("enteredAmount");
const amountError = document.getElementById("amountError");

const withdrawBtn = document.getElementById("withdrawBtn");
const popUp = document.querySelector(".pop-up");

enteredPin.addEventListener("keyup", () => (pinError.textContent = ""));
enteredAmount.addEventListener("keyup", () => (amountError.textContent = ""));

withdrawBtn.addEventListener("click", (event) => {
  const accounts = JSON.parse(localStorage.getItem("Accounts"));
  const username = JSON.parse(localStorage.getItem("Current User"));
  const currentAccount = accounts.filter(
    (element) => element.username == username
  )[0];

  if (enteredPin.value == "") {
    pinError.textContent = "Please enter your pin";
  } else if (enteredPin.value != currentAccount.pin) {
    pinError.textContent = "Invalid pin!";
  } else {
    if (enteredAmount.value == "") {
      amountError.textContent = "Please enter amount";
    } else if (enteredAmount.value > currentAccount.balance) {
      amountError.textContent = "Please check your balance!";
    } else if (enteredAmount.value <= 0) {
      amountError.textContent = "Invalid amount";
    } else {
      currentAccount.balance = currentAccount.balance - +enteredAmount.value;
      localStorage.setItem("Accounts", JSON.stringify(accounts));

      popUp.classList.add("openPopup");
    }
  }

  event.preventDefault();
});
