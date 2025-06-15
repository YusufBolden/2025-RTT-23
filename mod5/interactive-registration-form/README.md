# Interactive Registration Form

This project is a responsive registration form built with HTML, CSS, and JavaScript. It demonstrates real-time form validation, custom error messaging, and data persistence using localStorage.

---

## Features

- Real-time input validation using JavaScript
- HTML5 validation attributes
- Custom error messages for each input
- Matching confirmation password validation
- Data persistence using `localStorage`
- Dynamic success message display

---

## Setup Instructions

1. Clone or download the project folder.
2. Open `index.html` in a browser.
3. Fill out the form and observe the validation behavior.
4. Submit the form and refresh to see username persist.

---

## Reflection Questions

### 1. How did `event.preventDefault()` help in handling form submission?

It prevented the default browser behavior of refreshing or submitting the form to a server, allowing us to handle validation and logic with JavaScript before taking any action.

---

### 2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?

HTML5 attributes provide a first layer of automatic validation (e.g., required fields, input types). JavaScript offers custom control, such as specific error messages, pattern checks, or logic like password matching. Using both ensures robust, user-friendly feedback.

---

### 3. Explain how you used `localStorage` to persist and retrieve the username. What are the limitations of `localStorage` for storing sensitive data?

I saved the username in `localStorage` using `setItem()` after a successful registration, and retrieved it on page load with `getItem()`. However, `localStorage` is not secure because it's accessible to any JavaScript running on the page, so it should never store sensitive data like passwords.

---

### 4. Describe a challenge you faced in implementing the real-time validation and how you solved it.

Ensuring the confirm password matched the original password dynamically was tricky because it doesn't use built-in browser validation. I solved it by writing a custom function that compares both values during `input` events and displays appropriate errors.

---

### 5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

I listened to `input` events for live feedback and used JavaScript to check each input's validity. Custom error messages were displayed beside inputs in dedicated `<span>` elements, helping users understand and correct errors immediately.

---

## Author

Created by Yusuf Bolden as part of a form validation lab assignment.
