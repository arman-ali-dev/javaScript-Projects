const enteredName = document.getElementById("enteredName");
const nameError = document.getElementById("nameError");

const enteredAcNumber = document.getElementById("enteredAcNumber");
const acError = document.getElementById("acError");

const enteredPin = document.getElementById("enteredPin");
const pinError = document.getElementById("pinError");

const enteredConfirmPin = document.getElementById("enteredConfirmPin");
const confirmPinError = document.getElementById("confirmPinError");

const signUpBtn = document.getElementById("signUpBtn");
const loginLink = document.getElementById("loginLink");

enteredPin.addEventListener("keyup", () => {
  if (enteredPin.value.length > 6) {
    enteredPin.value = enteredPin.value.slice(0, 6);
  }

  pinError.textContent = "";
});

enteredConfirmPin.addEventListener("keyup", () => {
  if (enteredConfirmPin.value.length > 6) {
    enteredConfirmPin.value = enteredConfirmPin.value.slice(0, 6);
  }
  confirmPinError.textContent = "";
});

enteredName.addEventListener("keyup", () => (nameError.textContent = ""));

enteredAcNumber.addEventListener("keyup", () => {
  if (enteredAcNumber.value.length > 12) {
    enteredAcNumber.value = enteredAcNumber.value.slice(0, 12);
  }
  acError.textContent = "";
});

signUpBtn.addEventListener("click", (event) => {
  let accounts = JSON.parse(localStorage.getItem("Accounts"));
  let person = accounts.filter(
    (element) => element.username == enteredName.value
  )[0];

  console.log(person);
  if (!person) {
    let isValid = true;
    if (enteredAcNumber.value.length < 12) {
      acError.textContent = "Account number digit must be 12";
      isValid = false;
    } else if (enteredAcNumber.value.length == 0) {
      acError.textContent = "Please enter account number";
      isValid = false;
    }

    if (enteredName.value.length === 0) {
      nameError.textContent = "Please enter your name";
      isValid = false;
    }

    if (enteredPin.value.length < 4 && enteredPin.value.length > 0) {
      pinError.textContent = "Pin number must be 4";
      isValid = false;
    } else if (enteredPin.value.length == 0) {
      pinError.textContent = "Please create your pin";
      isValid = false;
    } else if (enteredConfirmPin.value.length == 0) {
      confirmPinError.textContent = "Please confirm your pin";
      isValid = false;
    } else if (enteredPin.value != enteredConfirmPin.value) {
      confirmPinError.textContent = "Pin and confirm pin is must be same";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      window.open("/home.html");

      const accounts = JSON.parse(localStorage.getItem("Accounts")) || [];

      let person = {
        username: enteredName.value,
        accountNumber: enteredAcNumber.value,
        pin: enteredConfirmPin.value,
        balance: 5000,
      };

      accounts.push(person);
      localStorage.setItem("Accounts", JSON.stringify(accounts));

      let username = enteredName.value;

      localStorage.setItem("Current User", JSON.stringify(username));
    }
  } else {
    nameError.textContent = "This user is allready exist!";
  }
});

loginLink.addEventListener("click", () => {
  window.open("/login.html");
});
