const enteredAmount = document.getElementById("enteredAmount");
const amountError = document.getElementById("amountError");

const enteredAcoountNumber = document.getElementById("enteredAcoountNumber");
const accountError = document.getElementById("accountError");

const enteredPin = document.getElementById("enteredPin");
const pinError = document.getElementById("pinError");

const transferBtn = document.getElementById("transferBtn");
let popUp = document.querySelector(".pop-up");

enteredAmount.addEventListener("keyup", () => (amountError.textContent = ""));

enteredAcoountNumber.addEventListener("keyup", () => {
  if (enteredAcoountNumber.value.length > 12) {
    enteredAcoountNumber.value = enteredAcoountNumber.value.slice(0, 12);
  }
  accountError.textContent = "";
});

enteredPin.addEventListener("keyup", () => {
  if (enteredPin.value.length > 6) {
    enteredPin.value = enteredPin.value.slice(0, 6);
  }
  pinError.textContent = "";
});

transferBtn.addEventListener("click", (event) => {
  let username = JSON.parse(localStorage.getItem("Current User"));
  let accounts = JSON.parse(localStorage.getItem("Accounts"));
  let currentAccount = accounts.filter((elem) => elem.username == username)[0];

  if (enteredAcoountNumber.value != currentAccount.accountNumber) {
    let receiverAccount = accounts.filter(
      (element) => element.accountNumber == enteredAcoountNumber.value
    )[0];

    if (enteredAcoountNumber.value == "") {
      accountError.textContent = "Please enter recevier account number";
    } else if (receiverAccount == undefined) {
      accountError.textContent = "User doesn't exist!";
    } else {
      console.log(receiverAccount);
      console.log(currentAccount);

      if (enteredPin.value == "") {
        pinError.textContent = "Enter pin!";
      } else if (enteredPin.value != currentAccount.pin) {
        pinError.textContent = "Incorrect Pin";
      } else {
        if (enteredAmount.value == "") {
          amountError.textContent = "Please enter a amount";
        } else if (enteredAmount.value > currentAccount.balance) {
          amountError.textContent = "Check your balance!";
        } else if (enteredAmount.value <= 0) {
          amountError.textContent = "Invalid amount!";
        } else {
          receiverAccount.balance =
            receiverAccount.balance + +enteredAmount.value;
          currentAccount.balance =
            currentAccount.balance - +enteredAmount.value;
          currentAccount.balance = currentAccount.balance;

          localStorage.setItem("Accounts", JSON.stringify(accounts));

          popUp.classList.add("openPopup");
        }
      }
    }
  } else {
    accountError.textContent = "Enter recevier account number not your!";
  }

  event.preventDefault();
});
