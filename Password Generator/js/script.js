let password = document.getElementById("random_pass");
let copyBtn = document.getElementById("copy_btn");
let progress = document.getElementById("progress");
let progressValueCount = document.getElementById("progressValueCount");
let checkUppercase = document.getElementById("check");
let checkLowercase = document.getElementById("check2");
let checkNumbers = document.getElementById("check3");
let checkSymbols = document.getElementById("check4");
let generateBtn = document.getElementById("generate_btn");
let copiedBtn = document.getElementById("copiedBtn");

let upperSet = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let lowerSet = "qwertyuioplkjhgfdsazxcvbnm";
let symbols = "~`@#$%^&*()_-+={}[]:;></?/*";
let numbers = "1234567890";
let pass = "";

progress.max = 20;

progress.onchange = function () {
  progressValueCount.innerHTML = progress.value;
};

generateBtn.addEventListener("click", generateRandomPassword);

function generateRandomPassword() {
  document.getElementById("copyTitle").title = "Copy";
  copiedBtn.style.display = "none";
  copyBtn.style.display = "inline-block";
  generateBtn.textContent = "Regenerate";

  let characters = "";

  if (checkUppercase.checked) {
    characters += upperSet;
  }
  if (checkLowercase.checked) {
    characters += lowerSet;
  }
  if (checkNumbers.checked) {
    characters += numbers;
  }
  if (checkSymbols.checked) {
    characters += symbols;
  }

  for (let i = 0; i < progress.value; ++i) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    let randomChar = characters.charAt(randomIndex);
    pass += randomChar;
  }
  password.value = pass;
  pass = "";
}

copyBtn.addEventListener("click", () => {
  document.getElementById("copyTitle").title = "Copied";
  copiedBtn.style.display = "inline-block";
  copyBtn.style.display = "none";
  password.select();
  document.execCommand("copy");
});
