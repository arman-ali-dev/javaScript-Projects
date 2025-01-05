const boxes = document.querySelectorAll(".details-section-content");
boxes.forEach((accordian) => {
  let button = accordian.querySelector(".person-button");
  let box = accordian.querySelector(".detail-box");
  button.addEventListener("click", () => {
    box.classList.toggle("active");
    button.classList.toggle("click");
  });
});
