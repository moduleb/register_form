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

const email = document.getElementById("register-email-field");
const form = document.getElementsByTagName("form")[0];
const emailError = document.querySelector("#register-email-field + span.error");

// Скрываем форму login при первой загрузке страницы
loginFormBox.classList.add("hidden");


function validateEmail(event) {
  // Каждый раз, когда пользователь что-то вводит,
  // мы проверяем, являются ли поля формы валидными

  if (email.validity.valid) {
    // Если на момент валидации какое-то сообщение об ошибке уже отображается,
    // если поле валидно, удаляем сообщение
    emailError.textContent = ""; // Сбросить содержимое сообщения
    emailError.className = "error"; // Сбросить визуальное состояние сообщения
  } else {
    // Если поле не валидно, показываем правильную ошибку
    showError();
  }
}

form.addEventListener("submit", function (event) {
  // Если поле email валидно, позволяем форме отправляться

  if (!email.validity.valid) {

    // Добавляем обработчик, чтобы валидация работала постоянно
    email.addEventListener("input", validateEmail);

    // Если поле email не валидно, отображаем сообщение об ошибке
    showError();

    // Предотвращаем стандартное событие отправки формы
    event.preventDefault();
  }
});

function showError() {

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



/*
Сбрасывает содержимое форм, ошибки валидации, и видимость пароля 
  при переключении типа формы (login, register)
*/
function reset() {

  for (var i = 0; i < forms.length; i++) {
    forms[i].reset()
  }
  emailError.textContent = ""; // Сбросить содержимое сообщения
  emailError.className = "error"; // Сбросить визуальное состояние сообщения 
  email.removeEventListener("input", validateEmail); // Удаляем постоянную валидацию полей формы
  hidePassword()
}


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
  formTypeMarkup.style.right = "171px"

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
  formTypeMarkup.style.right = "12px"

  // form visibility
  loginFormBox.classList.add("hidden");
  registerFormBox.classList.remove("hidden");

  reset()
});



