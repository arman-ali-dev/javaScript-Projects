const counter = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let count = 0;
let interval;

startBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    count++;
    counter.textContent = count;
  }, 200);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
