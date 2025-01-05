let enteredText = document.getElementById("enteredText");
let inputRow = document.getElementById("inputRow");
let listContainer = document.getElementById("list");

function addTesk() {
  if (enteredText.value === "") {
    alert("you Must Write Something!");
  } else {
    let task = document.createElement("li");
    task.textContent = enteredText.value;
    listContainer.appendChild(task);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
  }
  enteredText.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

(function saveTask() {
  listContainer.innerHTML = localStorage.getItem("data");
})();
