function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 const formOpenBtn = document.querySelector("#form-open"),
 loginForm = document.querySelector(".loginForm"),
 formContainer = document.querySelector(".form-container"),
 formCloseBtn = document.querySelector(".form-close"),
 signupBtn = document.querySelector("#signup"),
 loginBtn = document.querySelector("#login"),
 pwShowHide = document.querySelectorAll(".pw-hide"); 

 formOpenBtn.addEventListener("click", () => loginForm.classList.add("show") )
 formCloseBtn.addEventListener("click", () => loginForm.classList.remove("show") )