const name = document.getElementById("user-name");
const email = document.getElementById("user-email");
const password = document.getElementById("user-password");
const repeatPassword = document.getElementById("repeat-password");
const form = document.querySelector("form");
const inputCheckBox = document.querySelector("input[type=checkbox]");
const button = document.querySelector(".button>button");
const allInput = document.querySelectorAll("form input");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", validateRegisterForm);
  allInput.forEach((input) => {
    input.addEventListener("keyup", validateInputValue);
  });
  password.addEventListener("keyup", validatePassword);
}

function validateInputValue(e) {
  setTimeout(() => {
    if (e.target.value === "") {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  }, 1000);
}

function validateRegisterForm(e) {
  let userObj = {
    name: name.value.trim(),
    email: email.value.trim(),
    password: password.value.trim(),
    repeatPassword: repeatPassword.value.trim(),
    // checkBox: inputCheckBox.checked
  };
  //   if (
  //     userObj.name === "" ||
  //     userObj.email === "" ||
  //     userObj.password === "" ||
  //     userObj.repeatPassword === ""
  //   ) {
  //   } else {
  //   button.classList.add("button-active");
  //   }

  //   try {
  //     if(userObj.name === "" && userObj.email === "" && userObj.password === "" && userObj.repeatPassword === "" && userObj.checkBox === false) throw console.error("All fields are empty");
  //     if(userObj.name === "") throw console.error("Name is empty");
  //     if(userObj.email === "") throw console.error("Email is empty");
  //     if(userObj.password === "") throw console.error("Password is empty");
  //     if(userObj.repeatPassword === "") throw console.error("Repeat password is empty");
  //     if(userObj.checkBox === false) throw console.error("Checkbox is not checked");
  //   } catch (error) {
  //     console.log(error);
  //   }finally{
  //     allInput.forEach((input) => {
  //         input.value = "";
  //         }
  //     );
  //   }

  if (userObj.password !== userObj.repeatPassword) {
    password.classList.add("error");
    repeatPassword.classList.add("error");
  } else {
    password.classList.remove("error");
    repeatPassword.classList.remove("error");
  }
  console.log(regexPassword(userObj.password));
  e.preventDefault();
}

function regexPassword(paramsPassword) {
  const medumRegex = /^[A-Za-z]\w{7,14}$/;
  const strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (paramsPassword.match(strongRegex)) {
    return 2;
  } else if (paramsPassword.match(medumRegex)) {
    return 1;
  }
  return 0;
}
let box = document.querySelector(".password-box");
let p = document.createElement("p");
function validatePassword(e) {
  let hardDegger = regexPassword(e.target.value);
  p.classList.add("password-strength");
  switch (hardDegger) {
    case 0:
      p.textContent = "easy password";
      p.classList.add("easy");
      p.classList.remove("medium");
      p.classList.remove("strong");
      break;
    case 1:
      p.textContent = "medium password";
      p.classList.remove("easy");
      p.classList.add("medium");
      break;
    case 2:
      p.textContent = "strong password";
      p.classList.remove("easy");
      p.classList.remove("medium");
      p.classList.add("strong");
      break;
    default:
      break;
  }
  box.appendChild(p);
}
