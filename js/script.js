const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const formTypeMarkup = document.getElementById('form-type-markup');

const registerFormBox = document.getElementById('register');
const loginFormBox = document.getElementById('login');
const forms = document.getElementsByTagName('form');

const formSelector = document.getElementById('form-selector-wrap');
const formGreeting = document.getElementById('form-greeting');
const formDescription = document.getElementById('form-description');
const formBox = document.getElementById('form-box');

const registerPasswordField = document.getElementById('register-password-field');
const loginPasswordField = document.getElementById('login-password-field');

const loginOpenEyeIcon = document.getElementById("login-open-eye-icon");
const loginCrossedEyeIcon = document.getElementById("login-crossed-eye-icon");

const registerOpenEyeIcon = document.getElementById("register-open-eye-icon");
const registerCrossedEyeIcon = document.getElementById("register-crossed-eye-icon");
const successMessage = document.getElementById("success-message");

const email = document.getElementById("register-email-field");
const nameField = document.getElementById("register-name-field");
const passwordField = document.getElementById("register-password-field");
const loginNameField = document.getElementById("login-name-field");
const form = document.getElementsByTagName("form")[0];
const formLogin = document.getElementsByTagName("form")[1];
const emailError = document.querySelector("#register-email-field + span.error");
const nameError = document.querySelector("#register-name-field + span.error");
const passwordError = document.querySelector("#register-password-field + span.error");


form.addEventListener("submit", function (event) {

  var isvalid = true;
  // Если поле email валидно, позволяем форме отправляться

  if (!email.validity.valid) {
    // Если поле email не валидно, отображаем сообщение об ошибке
    showEmailError();

    // Предотвращаем стандартное событие отправки формы
    event.preventDefault();
    
    isvalid = false;
  }

  else {emailError.textContent = ""; }

  if (!nameField.validity.valid) {
    // Display an error message for the text field
    showNameError();

    // Prevent the form from submitting
    event.preventDefault();

    isvalid = false;
  }

  else {nameError.textContent = ""; }

  if (!passwordField.validity.valid) {
    // Display an error message for the text field
    showPasswordError();

    // Prevent the form from submitting
    event.preventDefault();

    isvalid = false;
  }
  else {passwordError.textContent = ""; }


  if (isvalid == true) {
    event.preventDefault();
    registerFormBox.classList.add("hidden");
    formSelector.classList.add("hidden");
    formGreeting.classList.add("hidden");
    formDescription.classList.add("hidden");
    // formBox.classList.add("hidden");
    successMessage.classList.remove("hidden");
    
  }

});



function showEmailError() {

  // Если поле пустое...
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";

    // Если поле содержит не email-адрес...
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";

    // Если содержимое слишком короткое...
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }


  // Задаём стилизацию
  emailError.className = "error active";
}


function showNameError() {

  // Если поле пустое...
  if (nameField.validity.valueMissing) {
    nameError.textContent = "You need to enter an user name.";

    // Если содержимое слишком короткое...
  } else if (nameField.validity.tooShort) {
    nameError.textContent = `User name should be at least ${nameField.minLength} characters; you entered ${nameField.value.length}.`;
  
    // Если содержит недопустимые символы...
  } else if (nameField.validity.patternMismatch) {
    nameError.textContent = "User name can only contain English letters and numbers.";
  }

  // Задаём стилизацию
  nameError.className = "error active";
}


function showPasswordError() {

  // Если поле пустое...
  if (passwordField.validity.valueMissing) {
    passwordError.textContent = "You need to enter an password.";

    // Если содержимое слишком короткое...
  } else if (passwordField.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${passwordField.minLength} characters; you entered ${passwordField.value.length}.`;
  
    // Если содержит недопустимые символы...
  } else if (passwordField.validity.patternMismatch) {
    passwordError.textContent = "Password must contain uppercase and lowercase letters and digits";
  }

  // Задаём стилизацию
  nameError.className = "error active";
}



/*
Сбрасывает содержимое форм, ошибки валидации, и видимость пароля 
  при переключении типа формы (login, register)
*/
function reset() {
  for (var i = 0; i < forms.length; i++) {
    forms[i].reset()
  }
  emailError.textContent = ""; // Сбросить содержимое сообщения
  // emailError.className = "error"; // Сбросить визуальное состояние сообщения 
  nameError.textContent = "";
  // nameFieldError.className = "error";
  passwordError.textContent = "";
  hidePassword()
}

// login submit
formLogin.addEventListener("submit", function (event) {

  console.log(loginNameField.validity.valid); 
  // Если поле email валидно, позволяем форме отправляться

  if (!loginNameField.validity.valid) {
    // Если поле email не валидно, отображаем сообщение об ошибке
    alert("Wrong login or password");
    event.preventDefault();
  }

  else if (!loginPasswordField.validity.valid) {
    alert("Wrong login or password");
    event.preventDefault();
  }
  });








// * Toggles the type of the password field.
function showPassword() {
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
// --------------------------------------------


// Добавляем обработчик события на клик по ссылке Login
loginLink.addEventListener('click', function (e) {
  e.preventDefault();

  // form selector
  loginLink.style.color = "#FFF";
  registerLink.style.color = "#9E896A";
  formTypeMarkup.style.left = "12px"

  // form visibility
  loginFormBox.classList.remove("hidden");
  registerFormBox.classList.add("hidden");

  reset()
});

// Добавляем обработчик события на клик по ссылке Register
registerLink.addEventListener('click', function (e) {
  e.preventDefault();

  // form selector
  registerLink.style.color = "#FFF";
  loginLink.style.color = "#9E896A";
  formTypeMarkup.style.left = "159px"

  // form visibility
  loginFormBox.classList.add("hidden");
  registerFormBox.classList.remove("hidden");

  reset()
});



