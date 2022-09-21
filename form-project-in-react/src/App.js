import { useState } from "react";
import InputField from "./components/input_field";

function App() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordVisibility, setPasswordVisibilty] = useState(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibilty] =
    useState(false);

  function formValidator() {
    let isAllInputValid =
      validateUsername(username) &&
      validateEmail(email) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword);
    if (isAllInputValid) {
      alert("You are signed up");
    }
  }

  function validateUsername(value) {
    setUsername(value);
    let isValid = value.length > 2 && value.length < 26;
    if (isValid) {
      setUsernameError("");
      return true;
    } else {
      setUsernameError("Username must be between 3 to 25 characters.");
      return false;
    }
  }

  function validateEmail(value) {
    setEmail(value);
    let isValid = value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (isValid) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email.");
      return false;
    }
  }

  function validatePassword(value) {
    setPassword(value);
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
      setPasswordError("");
      return true;
    } else {
      setPasswordError(
        "Password must be of at lefast 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%^&*)"
      );
      return false;
    }
  }

  function validateConfirmPassword(value) {
    setConfirmPassword(value);
    let isValid = password === value;
    if (isValid) {
      setConfirmPasswordError("");
      return true;
    } else {
      setConfirmPasswordError("Please enter the password again");
      return false;
    }
  }

  function togglePasswordVisibility(){
  setPasswordVisibilty((state) => !state)
  }
  function toggleConfirmPasswordVisibility(){
  setConfirmPasswordVisibilty((state) => !state)
  }

  return (
    <div className="login-form-body">
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <InputField
        label="Username"
        type="text"
        value={username}
        onEdit={(event) => {
          validateUsername(event.target.value);
        }}
        errorMessage={usernameError}
      />
      <InputField
        label="Email"
        type="text"
        value={email}
        onEdit={(event) => {
          validateEmail(event.target.value);
        }}
        errorMessage={emailError}
      />
      <div style={{ position: "relative" }}>
        <InputField
          label="Password"
          type={passwordVisibility ? "text" : "password"}
          value={password}
          onEdit={(event) => {
            validatePassword(event.target.value);
          }}
          errorMessage={passwordError}
        />
        <span
          class="material-symbols-outlined eye-icon"
          onclick="toggleConfirmPasswordVisibility()"
          onClick={togglePasswordVisibility}
        >
          {passwordVisibility?'visibility_off':'visibility'}
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <InputField
          label="Confirm Password"
          type={confirmPasswordVisibility ? "text" : "password"}
          value={confirmPassword}
          onEdit={(event) => {
            validateConfirmPassword(event.target.value);
          }}
          errorMessage={confirmPasswordError}
        />
        <span
          class="material-symbols-outlined eye-icon"
          onClick={toggleConfirmPasswordVisibility}
        >
          {confirmPasswordVisibility?'visibility_off':'visibility'}
        </span>
      </div>
      <button onClick={formValidator}>SIGN UP</button>
    </div>
  );
}

export default App;
