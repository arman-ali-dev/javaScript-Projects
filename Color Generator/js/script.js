let colorBox = document.getElementById("colorBox");
let generateBtn = document.getElementById("generateBtn");
let copyBtn = document.getElementById("copyBtn");
let randomCodeBox = document.querySelector(".randomCodeBox");
let copyIcon = document.getElementById("copy");
let copiedIcon = document.getElementById("copied");

generateBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 9999999);
  let colorCode = "#" + randomNumber.toString(16);

  colorBox.style.backgroundColor = colorCode;
  randomCodeBox.value = colorCode;
});

copyBtn.addEventListener("click", () => {
  randomCodeBox.select();
  document.execCommand("copy");
  copiedIcon.style.display = "block";
  copyIcon.style.display = "none";

  setTimeout(() => {
    copiedIcon.style.display = "none";
    copyIcon.style.display = "block";
  }, 2000);
});
