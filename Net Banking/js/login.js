const enteredAccountHolderName = document.getElementById(
  "enteredAccountHolderName"
);
const accountHolderNameError = document.getElementById(
  "accountHolderNameError"
);

const enteredAccountNumber = document.getElementById("enteredAccountNumber");
const accountNumberError = document.getElementById("accountNumberError");

const enteredPin = document.getElementById("enteredPin");
const pinError = document.getElementById("pinError");

const loginBtn = document.getElementById("loginBtn");

enteredAccountHolderName.addEventListener(
  "keyup",
  () => (accountHolderNameError.textContent = "")
);

enteredAccountNumber.addEventListener("keyup", () => {
  if (enteredAccountNumber.value.length > 12) {
    enteredAccountNumber.value = enteredAccountNumber.value.slice(0, 12);
  }
  accountNumberError.textContent = "";
});

enteredPin.addEventListener("keyup", () => (pinError.textContent = ""));

loginBtn.addEventListener("click", (event) => {
  let isValid = true;
  let accounts = JSON.parse(localStorage.getItem("Accounts"));
  let person = accounts.filter(
    (element) => element.username == enteredAccountHolderName.value
  )[0];

  if (enteredAccountHolderName.value == "") {
    accountHolderNameError.textContent =
      "Please enter the account holder name!";
    isValid = false;
  } else if (person == undefined) {
    accountHolderNameError.textContent = "User doesn't exist!";
    isValid = false;
  } else {
    if (enteredAccountNumber.value == "") {
      accountNumberError.textContent = "Please enter the account number!";
      isValid = false;
    } else if (person.accountNumber != enteredAccountNumber.value) {
      accountNumberError.textContent = "Incorrect account number!";
      isValid = false;
    }

    if (enteredPin.value == "") {
      pinError.textContent = "Please enter pin!";
      isValid = false;
    } else if (person.pin != enteredPin.value) {
      pinError.textContent = "Incorrect pin.";
      isValid = false;
    }
  }

  if (!isValid) {
    event.preventDefault();
  } else {
    localStorage.setItem("Current User", JSON.stringify(person.username));
    window.open("/home.html");
  }
});
