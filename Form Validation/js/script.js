let captcha = "";
function show() {
  captcha = "";

  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let character =
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

  for (let i = 0; i < 6; ++i) {
    let store = character.charAt(Math.floor(Math.random() * character.length));
    captcha += store;
  }

  let font = Math.floor(Math.random() * fonts.length);
  document.getElementById("captcha-box").style.color = "#808080";
  document.getElementById("captcha-box").style.fontFamily = fonts[font];
  document.getElementById("captcha-box").innerHTML = captcha;
}

function validateForm() {
  let firstName = document.forms["myForm"]["fName"].value;
  let lastName = document.forms["myForm"]["lName"].value;
  if (firstName === "") {
    document.getElementById("errorFirstName").innerText =
      "First Name Must Be Filled Out...";
    return false;
  } else if (lastName === "") {
    document.getElementById("errorLastName").innerText =
      "Last Name Must Be Filled Out...";
    return false;
  }

  let email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("emailerror").innerText = "Please Enter Your Email";
    return false;
  } else if (!email.endsWith("@gmail.com")) {
    document.getElementById("emailerror").innerText = "Enter A Valid Email...";
    return false;
  }

  let phone = document.getElementById("phone").value;
  if (phone.length === 0) {
    document.getElementById("phoneerror").innerText =
      "Please Enter Your Phone Number...";
    return false;
  } else if (phone.length !== 10) {
    document.getElementById("phoneerror").innerText =
      "Enter Valid Phone Number!";
    return false;
  }

  let msgSub = document.getElementById("msg-subject").value;
  if (msgSub === "") {
    document.getElementById("msgsuberror").innerHTML =
      "Please Enter A Subject For Send Message...";
    return false;
  }

  let message = document.getElementById("msg-box").value;
  if (message === "") {
    document.getElementById("messageerror").innerText =
      "Please Fill Your Message...";
    return false;
  }

  document.forms["myForm"]["checkbox"].required;
  let enterCaptcha = document.querySelector(".captcha").value;
  if (enterCaptcha === "") {
    document.getElementById("captchaerror").innerText = "Enter Captcha Code!";
    return false;
  } else if (enterCaptcha !== captcha) {
    document.getElementById("captchaerror").innerText =
      "Incorrect Captcha Code! Try Again...";
    return false;
  }

  alert("Your Form Has Been Successfully Submit...");
}

function removeError() {
  document.getElementById("errorFirstName").innerHTML = "";
  document.getElementById("errorLastName").innerHTML = "";
  document.getElementById("emailerror").innerHTML = "";
  document.getElementById("phoneerror").innerHTML = "";
  document.getElementById("msgsuberror").innerHTML = "";
  document.getElementById("messageerror").innerHTML = "";
  document.getElementById("captchaerror").innerHTML = "";
}

document.getElementById("refresh").addEventListener("click", () => {
  return show();
});
