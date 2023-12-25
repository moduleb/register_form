// Получаем ссылку и поля формы
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const formTypeMarkup = document.getElementById('form-type-markup');

const nameField = document.getElementById('name-field-block');
const emailField = document.getElementById('email-field-block');
const passwordField = document.getElementById('password-field-block');

const forgot_passwordLink = document.getElementById('forgot-password-link');
const buttonLink = document.getElementById('btn');


// Добавляем обработчик события на клик по ссылке Login
loginLink.addEventListener('click', function(e) {
  loginLink.style.color = "#FFF";
  registerLink.style.color = "#9E896A";
  buttonLink.style.backgroundColor = "#9E896A";
  buttonLink.innerHTML = "Login";
  formTypeMarkup.style.right = "-75px"
  e.preventDefault(); // Отменяем действие по умолчанию (переход по ссылке)

  // Изменяем поля формы на имя и пароль
  nameField.style.display = 'block';
  passwordField.style.display = 'block';
  emailField.style.display = 'none';
  forgot_passwordLink.style.display = 'block';
});


// Добавляем обработчик события на клик по ссылке Register
registerLink.addEventListener('click', function(e) {
    registerLink.style.color = "#FFF";
    loginLink.style.color = "#9E896A";
    buttonLink.style.backgroundColor = "#553E19";
    buttonLink.innerHTML = "Register";
    formTypeMarkup.style.right = "-234px"
    e.preventDefault(); // Отменяем действие по умолчанию (переход по ссылке)
  
    // Изменяем поля формы на имя и пароль
    nameField.style.display = 'block';
    passwordField.style.display = 'block';
    emailField.style.display = 'block';
    forgot_passwordLink.style.display = 'none';
  });


  // * Toggles the visibility of the password field.

const showPasswordIcon = document.getElementById('show-password');
const hidePasswordIcon = document.getElementById('hide-password');



function togglePassword() {
  var passwordField = document.getElementById("password-field");
  var showPasswordIcon = document.getElementById("show-password");
  var hidePasswordIcon = document.getElementById("hide-password");
  
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordIcon.style.display = "block";
    hidePasswordIcon.style.display = "none";
  } else {
    passwordField.type = "password";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "block";
  }
}