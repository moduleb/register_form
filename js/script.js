const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const formTypeMarkup = document.getElementById('form-type-markup');

const registerFormBox = document.getElementById('register');
const loginFormBox = document.getElementById('login');
const forms = document.getElementsByTagName('form');

const registerPasswordField = document.getElementById('register-password-field');
const loginPasswordField = document.getElementById('login-password-field');

const loginOpenEyeIcon = document.getElementById("login-open-eye-icon");
const loginCrossedEyeIcon = document.getElementById("login-crossed-eye-icon");

const registerOpenEyeIcon = document.getElementById("register-open-eye-icon");
const registerCrossedEyeIcon = document.getElementById("register-crossed-eye-icon");

loginFormBox.classList.add("hidden");


  // * Toggles the type of the password field.

  function  showPassword(){
    loginPasswordField.type = "text";
    loginCrossedEyeIcon.style.display = "none";
    loginOpenEyeIcon.style.display = "block";

    registerPasswordField.type = "text";
    registerOpenEyeIcon.style.display = "block";
    registerCrossedEyeIcon.style.display = "none";
}

function hidePassword() {
  loginPasswordField.type = "password";
  loginCrossedEyeIcon.style.display = "block";
  loginOpenEyeIcon.style.display = "none";

  registerPasswordField.type = "password";
  registerOpenEyeIcon.style.display = "none";
  registerCrossedEyeIcon.style.display = "block";
}


  // ----------------------------------------------------------------

// Добавляем обработчик события на клик по ссылке Login
loginLink.addEventListener('click', function(e) {
  e.preventDefault();

  // form selector
  loginLink.style.color = "#FFF";
  registerLink.style.color = "#9E896A";
  formTypeMarkup.style.right = "171px"

  // form visibility
  loginFormBox.classList.remove("hidden");
  registerFormBox.classList.add("hidden");

  // reset forms
  for (var i = 0; i < forms.length; i++) {
    forms[i].reset()
  }

  // password fields type reset
  hidePassword()
});

// Добавляем обработчик события на клик по ссылке Register
registerLink.addEventListener('click', function(e) {  
    e.preventDefault(); 

    // form selector
    registerLink.style.color = "#FFF";
    loginLink.style.color = "#9E896A";
    formTypeMarkup.style.right = "12px"

    // form visibility
    loginFormBox.classList.add("hidden");
    registerFormBox.classList.remove("hidden");

    // reset forms
    for (var i = 0; i < forms.length; i++) {
    forms[i].reset()
    }
    // password fields type reset
    hidePassword()
  });



