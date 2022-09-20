function formValidator() {
    event.preventDefault();
    let username = document.forms["login-form"]["username"].value;
    let email = document.forms["login-form"]["email"].value;
    let password = document.forms["login-form"]["password"].value;
    let confirm_password = document.forms["login-form"]["confirm_password"].value;

    let isAllInputValid = validateUsername(username) && validateEmail(email) && validatePassword(password) && validateConfirmPassword(confirm_password);
    if(isAllInputValid){
        alert('You are signed up');
    }
                                    
}

function validateUsername(value) {
 let inputField = document.getElementById("username-input");
 let errorDiv = document.getElementById("username-error");
  let isValid = value.length > 2 && value.length < 26;
  if (isValid) {
    inputField.classList.remove("error-input");
    inputField.classList.add("correct-input");
    errorDiv.innerHTML = "";
    return true;
  } else {
    inputField.classList.remove("correct-input");
    inputField.classList.add("error-input");
    errorDiv.innerHTML = "Username must be between 3 to 25 characters.";
    return false;
  }
}

function validateEmail(email) {
 let emailField = document.getElementById("email-input");
 let errorDiv = document.getElementById("email-error");
  let isValid = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (isValid) {
    emailField.classList.remove("error-input");
    emailField.classList.add("correct-input");
    errorDiv.innerHTML = "";
    return true;
  } else {
    emailField.classList.remove("correct-input");
    emailField.classList.add("error-input");
    errorDiv.innerHTML = "Please enter a valid email.";
    return false;
  }
}

function validatePassword(value) {
 let passwordField = document.getElementById("password-input");
 let errorDiv = document.getElementById("password-error");
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  var numberChars = /[0-9]/g;
  const specialChars = /[`!@#$%^&*]/;
  let isValid =
    value.match(upperCaseLetters) &&
    value.match(lowerCaseLetters) &&
    value.match(numberChars) &&
    value.match(specialChars) &&
    value.length > 7;
  if (isValid) {
    passwordField.classList.remove("error-input");
    passwordField.classList.add("correct-input");
    errorDiv.innerHTML = "";
    return true;
  } else {
    passwordField.classList.remove("correct-input");
    passwordField.classList.add("error-input");
    errorDiv.innerHTML =
      "Password must be of at lefast 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%^&*)";
      return false;
  }
}

function validateConfirmPassword(value) {
let  confirmPasswordField = document.getElementById("confirm-password-input");
let  errorDiv = document.getElementById("confirm-password-error");
let  passwordField =document.getElementById("password-input");
  let isValid = passwordField.value == value;
  if (isValid) {
    confirmPasswordField.classList.remove("error-input");
    confirmPasswordField.classList.add("correct-input");
    errorDiv.innerHTML = "";
    return true;
  } else {
    confirmPasswordField.classList.remove("correct-input");
    confirmPasswordField.classList.add("error-input");
    errorDiv.innerHTML ="Please enter the password again";
    return false;
  }
}

function togglePasswordVisibility(){
    let passwordField = document.getElementById("password-input");
    let iconEl = document.getElementById("togglePassword");

    if(passwordField.getAttribute("type")=="password"){
        passwordField.setAttribute("type","text");
        iconEl = "visibility";
    }
    else{
        passwordField.setAttribute("type","password");
        iconEl="visibility_off";
    }
    
}

function toggleConfirmPasswordVisibility(){
    let passwordField = document.getElementById("confirm-password-input");
    let iconEl = document.getElementById("toggleConfirmPassword");

    if(passwordField.getAttribute("type")=="password"){
        passwordField.setAttribute("type","text");
        iconEl = "visibility";
    }
    else{
        passwordField.setAttribute("type","password");
        iconEl="visibility_off";
    }
    
}