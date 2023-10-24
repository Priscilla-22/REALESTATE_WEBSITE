// Function to toggle dark mode
function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
  // Element selection
  const formOpenBtn = document.querySelector("#form-open");
  const subscribeForm = document.querySelector(".subscribe-form");
  const formContainer = document.querySelector(".form-container");
  const formCloseBtn = document.querySelector(".form-close");
  const signupBtn = document.querySelector("#signup");
  const loginBtn = document.querySelector("#login");
  const pwShowHide = document.querySelectorAll(".pw-hide");
  
  // Event listeners
   formOpenBtn.addEventListener("click", () => {
    subscribeForm.classList.add("show");
  });
  formCloseBtn.addEventListener("click", () => {
    subscribeForm.classList.remove("show");
  });
  
  pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if (getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      } else {
        getPwInput.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      }
    });
  });
  
  signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
  });
  
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
  });
});

