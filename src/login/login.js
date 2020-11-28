import "./styles.scss";

const loginEnter = document.querySelector(".tab-form-sign");
const registerEnter = document.querySelector(".tab-form-register");
const buttonLogin = document.querySelector(".tab");
const buttonRegister = document.querySelector(".tab-register");

buttonRegister.addEventListener("click", () => {
  buttonRegister.classList.add("active");
  buttonLogin.classList.remove("active");
  loginEnter.style.display = "none";
  registerEnter.style.display = "block";
});

buttonLogin.addEventListener("click", () => {
  buttonRegister.classList.remove("active");
  buttonLogin.classList.add("active");
  loginEnter.style.display = "block";
  registerEnter.style.display = "none";
});

const inpElement = document.querySelector(".password-eye");
const subbmitIcon = document.querySelector(".fa-eye");

let password = true;

subbmitIcon.addEventListener("click", () => {
  if (password) {
    inpElement.setAttribute("type", "text");
    subbmitIcon.style.color = "red";
  } else {
    inpElement.setAttribute("type", "password");
    subbmitIcon.style.color = "#7a797e";
  }
  password = !password;
});

// var users =[
//   {username: 'nadia', password: '123'},
//   {username: 'admin', password: '555'}
// ]

const goToPage = document.querySelector(".form__button");
goToPage.addEventListener("click", () => {
  window.location.href = "signup.html";
});
