const form = document.getElementById("registrationForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");

// Load saved username on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedUsername = localStorage.getItem("savedUsername");
  if (savedUsername) {
    username.value = savedUsername;
  }
});

// Helper to show custom error messages
function showError(input, message, errorSpan) {
  errorSpan.textContent = message;
  input.classList.add("invalid");
}

function clearError(input, errorSpan) {
  errorSpan.textContent = "";
  input.classList.remove("invalid");
}

// Validate input fields
function validateUsername() {
  if (username.validity.valueMissing) {
    showError(username, "Username is required.", usernameError);
  } else if (username.value.length < 3) {
    showError(username, "Username must be at least 3 characters.", usernameError);
  } else {
    clearError(username, usernameError);
  }
}

function validateEmail() {
  if (email.validity.valueMissing) {
    showError(email, "Email is required.", emailError);
  } else if (email.validity.typeMismatch) {
    showError(email, "Please enter a valid email address.", emailError);
  } else {
    clearError(email, emailError);
  }
}

function validatePassword() {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (password.validity.valueMissing) {
    showError(password, "Password is required.", passwordError);
  } else if (!pattern.test(password.value)) {
    showError(password, "Password must contain 8+ chars, uppercase, lowercase, and number.", passwordError);
  } else {
    clearError(password, passwordError);
  }
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    showError(confirmPassword, "Please confirm your password.", confirmPasswordError);
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match.", confirmPasswordError);
  } else {
    clearError(confirmPassword, confirmPasswordError);
  }
}

// Real-time validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// Final validation on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateUsername();
  validateEmail();
  validatePassword();
  validateConfirmPassword();

  const isFormValid =
    username.checkValidity() &&
    email.checkValidity() &&
    password.checkValidity() &&
    confirmPassword.value === password.value;

  if (isFormValid) {
    localStorage.setItem("savedUsername", username.value);
    successMessage.textContent = "Registration successful!";
    form.reset();
  } else {
    successMessage.textContent = "";
    const firstInvalid = form.querySelector("input:invalid");
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }
});
