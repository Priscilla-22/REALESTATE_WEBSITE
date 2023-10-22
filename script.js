// Function to toggle dark mode
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Element selection
const formOpenBtn = document.querySelector("#form-open");
  loginForm = document.querySelector(".loginForm");
  formContainer = document.querySelector(".signup-form");
  formCloseBtn = document.querySelector(".form-close");
  signupBtn = document.querySelector("#signup");
  loginBtn = document.querySelector("#login");
  pwShowHide = document.querySelectorAll(".pw-hide");

// Event listeners
formOpenBtn.addEventListener("click", () => {
  loginForm.classList.add("show");
});
formCloseBtn.addEventListener("click", () => {
  loginForm.classList.remove("show");
});

pwShowHide.forEach(icon => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
  if(getPwInput.type === "password") {
    getPwInput.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }else{
    getPwInput.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
  })
  
});



signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});