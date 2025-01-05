let output = document.getElementById("output");
let code = document.getElementById("code");
let preTag = document.createElement("pre");
let codeTag = document.createElement("code");

function codeStyle() {
  codeTag.innerHTML = code.value;
  codeTag.classList.add("language-typescript");
  codeTag.classList.add("hljs");
  code.appendChild(preTag);
  preTag.appendChild(codeTag);
}

console.log = function (message) {
  output.innerHTML += message + "<br />";
};

function myFunction() {
  output.innerHTML = "";
  let func = new Function(code.value);
  func();
  hljs.initHighlightingOnLoad();
}

let isThemeDark = true;
document.getElementById("themeChange").addEventListener("click", () => {
  if (isThemeDark === true) {
    document.querySelector(".editor-section").style.backgroundColor = "black";
    document
      .querySelectorAll(".editor-section .manu .manu_navbar ul li a img")
      .forEach((img) => {
        img.classList.add("colorChange");
      });
    document.querySelector(".editor-section").style.backgroundColor = "#38444d";
    code.classList.add("placeholderColorChange");
    isThemeDark = false;
  } else {
    document.querySelector(".editor-section").style.backgroundColor = "white";
    document
      .querySelectorAll(".editor-section .manu .manu_navbar ul li a img")
      .forEach((img) => {
        img.classList.remove("colorChange");
      });
    code.classList.remove("placeholderColorChange");
    isThemeDark = true;
  }
});

let isOrientation = true;
document.getElementById("oreintationBtn").addEventListener("click", () => {
  if (isOrientation === true) {
    document.querySelectorAll(".col-6").forEach((col) => {
      col.classList.add("col-12");
    });

    code.style.height = "43vh";
    output.style.height = "42vh";
    output.style.marginTop = "13px";
    isOrientation = false;
  } else {
    document.querySelectorAll(".col-6").forEach((col) => {
      col.classList.remove("col-12");
    });
    code.style.height = "87vh";
    output.style.height = "87vh";
    output.style.marginTop = "0px";
    isOrientation = true;
  }
});
