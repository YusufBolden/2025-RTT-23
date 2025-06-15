const form = document.querySelector('.form-group-signup');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.querySelector('.error-message-signup');

// Generic field validation function
function validateField(input, customValidator = null) {
  input.classList.remove('valid', 'invalid');
  input.setCustomValidity('');

  if (input.required && !input.value.trim()) {
    input.setCustomValidity('This field is required.');
  } else if (customValidator) {
    customValidator(input);
  }

  const isValid = input.checkValidity();

  if (!isValid) {
    input.classList.add('invalid');
    errorMessage.textContent = input.validationMessage;
  } else {
    input.classList.add('valid');
    errorMessage.textContent = '';
  }

  return isValid;
}

// Specific field validators
function validateUsername(input) {
  if (input.value.length < 3) {
    input.setCustomValidity('Username must be at least 3 characters long.');
  }
}

function validateEmail(input) {
  if (!input.validity.valid) {
    input.setCustomValidity('Please enter a valid email address.');
  }
}

function validatePassword(input) {
  if (input.value.length < 6) {
    input.setCustomValidity('Password must be at least 6 characters long.');
  }
}

function validateConfirmPassword(input) {
  if (input.value !== passwordInput.value) {
    input.setCustomValidity('Passwords do not match.');
  }
}

// Attach input listeners for real-time validation
usernameInput.addEventListener('input', () => validateField(usernameInput, validateUsername));
emailInput.addEventListener('input', () => validateField(emailInput, validateEmail));
passwordInput.addEventListener('input', () => validateField(passwordInput, validatePassword));
confirmPasswordInput.addEventListener('input', () => validateField(confirmPasswordInput, validateConfirmPassword));

// Submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isUsernameValid = validateField(usernameInput, validateUsername);
  const isEmailValid = validateField(emailInput, validateEmail);
  const isPasswordValid = validateField(passwordInput, validatePassword);
  const isConfirmValid = validateField(confirmPasswordInput, validateConfirmPassword);

  if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid) {
    alert('Account created successfully!');
    form.reset();
    errorMessage.textContent = '';
    document.querySelectorAll('input').forEach(input => {
      input.classList.remove('valid', 'invalid');
    });
  } else {
    alert('Please fix the errors in the form.');
  }
});
