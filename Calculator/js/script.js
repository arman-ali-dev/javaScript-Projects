let input = document.getElementById("main-input");
let buttons = document.querySelectorAll("button");
let string = "";

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (item) => {
    let clickedButton = item.target.innerHTML;

    switch (clickedButton) {
      case "=":
        string = eval(string);
        input.value = string;
        break;

      case "AC":
        string = "";
        input.value = string;
        break;

      case "DEL":
        string = string.slice(0, string.length - 1);
        input.value = string;
        break;

      default:
        string += clickedButton;
        input.value = string;
        break;
    }
  });
});
