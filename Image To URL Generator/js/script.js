let enteredImage = document.getElementById("enteredImageLocal");
let copyBtn = document.getElementById("copyBtn");
let URL = document.getElementById("URL");
let copyIcon = document.getElementById("copyIcon");
let copiedIcon = document.getElementById("copiedIcon");

enteredImage.addEventListener("change", (e) => {
  let file = e.target.files[0];
  let reader = new FileReader();

  reader.onload = (event) => {
    let imageURL = event.target.result;
    URL.value = imageURL;
    URL.style.cursor = "auto";
  };

  reader.readAsDataURL(file);
});

copyBtn.addEventListener("click", () => {
  URL.select();
  document.execCommand("copy");
  copyIcon.style.display = "none";
  copiedIcon.style.display = "inline-block";
  setTimeout(() => {
    copyIcon.style.display = "inline-block";
    copiedIcon.style.display = "none";
  }, 2000);
});
