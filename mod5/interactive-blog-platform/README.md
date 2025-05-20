# Interactive Personal Blog Platform

## 📘 Project Description

This is a simple, interactive personal blog application built using **HTML**, **Tailwind CSS**, and **JavaScript**. It allows users to:

- Create new blog posts with a title and content.
- Edit or delete existing posts.
- Store and persist posts using `localStorage`, so content remains after page refresh.
- Display validation error messages for incomplete input.

All posts are dynamically rendered, and changes are reflected in real-time in the browser.

---

## 🚀 How to Run the Application

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, etc.).
3. No additional installations or setup steps are required.

> 💡 This app is 100% client-side and runs entirely in your browser. No backend or server is needed.

---

## 🛠️ Development Reflection

### ✅ What Went Well
- Structuring the project with a clean separation of HTML, styling via Tailwind CSS, and JavaScript logic.
- Using `localStorage` effectively to persist post data.
- Leveraging dynamic DOM manipulation for post rendering and updates.

### 🚧 Challenges Faced
- Ensuring the form validation worked consistently for both creating and editing posts.
- Managing the state between "create" mode and "edit" mode without confusing the user experience.
- Avoiding XSS (cross-site scripting) by escaping user input before injecting into the DOM.

### 🧠 Solutions Implemented
- Added a utility function `escapeHTML()` to sanitize all user inputs.
- Used `data-id` attributes and controlled form state with a flag (`editingId`) to clearly distinguish between editing and creating.
- Modularized the rendering and storage logic into clearly named functions to reduce repetition.

---

## ⚠️ Known Issues / Not Yet Implemented

- No rich text formatting for post content (e.g., bold/italic).
- No pagination or search/filtering of posts.
- Editing replaces content in the same form used for creation, which could be enhanced with a modal or separate edit view.
- No accessibility optimizations beyond HTML defaults (e.g., ARIA labels or keyboard navigation support).

---

## 📂 File Structure
```
personal-blog-sba/
├── index.html # Main HTML structure
├── styles.css # Tailwind-based styling (no custom styles)
├── script.js # JavaScript logic (CRUD + localStorage)
└── README.md # Project overview and documentation
```


---

## 🧑‍💻 Author

This project was developed by Yusuf Bolden as part of a front-end skills assessment. Feedback and suggestions are welcome!
