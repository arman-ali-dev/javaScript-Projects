let enteredText = document.getElementById("enteredText");

enteredText.addEventListener("keyup", () => {
    let text = enteredText.value.split(" ");

    let newText = text.map(word => word.charAt(0).charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    enteredText.value = newText
})