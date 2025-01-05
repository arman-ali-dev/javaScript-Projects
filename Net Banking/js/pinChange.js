const enteredCurrentPin = document.getElementById("enteredCurrentPin");
const currentPinError = document.getElementById("currentPinError");

const enteredNewPin = document.getElementById("enteredNewPin");
const newPinError = document.getElementById("newPinError");

const enteredConfirmPin = document.getElementById("enteredConfirmPin");
const confirmPinError = document.getElementById("confirmPinError");

const popUp = document.querySelector(".pop-up");
const changeBtn = document.getElementById("changeBtn");

enteredCurrentPin.addEventListener(
  "keyup",
  () => (currentPinError.textContent = "")
);

enteredNewPin.addEventListener("keyup", () => {
  if (enteredNewPin.value.length > 6) {
    enteredNewPin.value = enteredNewPin.value.slice(0, 6);
  }
  newPinError.textContent = "";
});

enteredConfirmPin.addEventListener("keyup", () => {
  if (enteredConfirmPin.value.length > 6) {
    enteredConfirmPin.value = enteredConfirmPin.value.slice(0, 6);
  }
  confirmPinError.textContent = "";
});

changeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let username = JSON.parse(localStorage.getItem("Current User"));
  let accounts = JSON.parse(localStorage.getItem("Accounts"));

  let currentAccount = accounts.filter(
    (element) => element.username == username
  )[0];

  if (enteredCurrentPin.value == "") {
    currentPinError.textContent = "Enter your current pin";
  } else if (enteredCurrentPin.value != currentAccount.pin) {
    currentPinError.textContent = "Invalid pin!";
  } else {
    if (enteredNewPin.value == "") {
      newPinError.textContent = "Enter new pin";
    } else if (enteredNewPin.value.length < 4) {
      newPinError.textContent = "Enter pin between to 4 and 6";
    } else {
      if (enteredConfirmPin.value == "") {
        confirmPinError.textContent = "Enter confirm pin";
      } else if (enteredNewPin.value != enteredConfirmPin.value) {
        confirmPinError.textContent = "New and confirm pin must be same!";
      } else {
        currentAccount.pin = enteredConfirmPin.value;
        localStorage.setItem("Accounts", JSON.stringify(accounts));
        popUp.classList.add("openPopup");
      }
    }
  }
});
