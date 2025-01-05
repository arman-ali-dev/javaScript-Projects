const enteredDay = document.getElementById("enteredDay");
const enteredMonth = document.getElementById("enteredMonth");
const enteredYear = document.getElementById("enteredYear");
const calculateBtn = document.getElementById("calculateBtn");
const error = document.getElementById("error");

enteredDay.addEventListener("keyup", () => {
  if (enteredDay.value.length > 2) {
    enteredDay.value = enteredDay.value.slice(0, 2);
  } else if (enteredDay.value > 31 || enteredDay.value < 1) {
    error.textContent = "Invalid Date!";
    error.style.color = "red";
  } else {
    error.textContent = "";
  }
});

enteredMonth.addEventListener("keyup", () => {
  if (enteredMonth.value.length > 2) {
    enteredMonth.value = enteredMonth.value.slice(0, 2);
  } else if (enteredMonth.value > 12 || enteredMonth.value < 1) {
    error.textContent = "Invalid Month!";
  } else {
    error.textContent = "";
  }
});

enteredYear.addEventListener("keyup", () => {
  if (enteredYear.value.length > 4) {
    enteredYear.value = enteredYear.value.slice(0, 4);
  } else if (enteredYear.value > 2024) {
    error.textContent = "Invalid Year!";
  } else {
    error.textContent = "";
  }
});

calculateBtn.addEventListener("click", () => {
  if (!enteredDay.value || !enteredMonth.value || !enteredYear.value) {
    error.textContent = "Invalid Date!";
    return;
  }

  let date = new Date();
  let year;

  if (enteredMonth.value > date.getMonth()) {
    year = date.getFullYear() - 1;
  } else {
    year = date.getFullYear();
  }

  let todayDate = new Date(year, enteredMonth.value - 1, enteredDay.value);

  let DOB = new Date(
    `${enteredMonth.value}/${enteredDay.value}/${enteredYear.value}`
  );

  let DOBTimeDifference = Math.floor(
    (todayDate.getTime() - DOB.getTime()) / (24 * 60 * 60 * 1000)
  );
  let exactTimeDifference = Math.floor(
    (date.getTime() - DOB.getTime()) / (24 * 60 * 60 * 1000)
  );

  let yearDifference = todayDate.getFullYear() - DOB.getFullYear();
  let daysDifference = exactTimeDifference - DOBTimeDifference;

  error.textContent = `You're ${yearDifference} years and ${daysDifference} days old.`;
  error.style.color = "blue";
});
