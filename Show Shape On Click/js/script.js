const circleBtn = document.getElementById("circleBtn");
const reactangleBtn = document.getElementById("reactangleBtn");
const squareBtn = document.getElementById("squareBtn");
const triangleBtn = document.getElementById("triangleBtn");
const shape = document.getElementById("shape");

circleBtn.addEventListener("click", () => {
  shape.className = "";
  shape.classList.add("circle");
});

squareBtn.addEventListener("click", () => {
  shape.className = "";
  shape.classList.add("square");
});

reactangleBtn.addEventListener("click", () => {
  shape.className = "";
  shape.classList.add("reactangle");
});

triangleBtn.addEventListener("click", () => {
  shape.className = "";
  shape.classList.add("triangle");
});
