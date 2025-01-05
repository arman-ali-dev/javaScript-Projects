let cursor = document.getElementById("hammer");
let startBtn = document.getElementById("start_btn");
let stopBtn = document.getElementById("stop_btn");
let holes = document.querySelectorAll(".hole");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("click", () => {
  cursor.style.animation = "none";
  setTimeout(() => {
    cursor.style.animation = "";
  }, 100);
});

let point = 0;
let holee;
let stop;

startBtn.addEventListener("click", () => {
  stopBtn.style.display = "inline-block";
  startBtn.style.display = "none";

  stop = setInterval(() => {
    let ratShow = Math.floor(Math.random() * holes.length);
    holee = holes[ratShow];
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://media.geeksforgeeks.org/wp-content/uploads/20210303135621/rat.png"
    );

    img.classList.add("rat");
    holee.appendChild(img);

    setTimeout(() => {
      holee.removeChild(img);
    }, 700);
  }, 800);
});

window.addEventListener("click", (e) => {
  if (e.target === holee) {
    point++;
  }
  document.getElementById("point").textContent = point;
});

stopBtn.addEventListener("click", () => {
  stopBtn.style.display = "none";
  startBtn.style.display = "inline-block";
  clearInterval(stop);
});
