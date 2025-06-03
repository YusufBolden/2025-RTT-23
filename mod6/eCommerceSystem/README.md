# 🛒 E-Commerce Product Viewer

## Project Overview

This project is a product listing web application that fetches product data, applies discounts and taxes, and displays the final prices in a browser interface. It is built using TypeScript, JavaScript, HTML and CSS with an emphasis on clean, modular code and asynchronous data handling.

---

## Dashboard Screenshot

![](./src/images/dashboard.png)

## 📁 Project Structure

```
e-commerce-system/
├── dist/
│   ├── index.html
│   ├── main.js
│   └── style.css
│
├── src/
│   ├── api/
│   │   └── productsAPI.ts
│   │
│   ├── classes/
│   │   ├── Product.ts
│   │   └── ProductManager.ts
│   │
│   ├── utils/
│   │   ├── calculateDiscount.ts
│   │   ├── calculateTax.ts
│   │   ├── handleError.ts
│   │   └── retry.ts
│   │
│   ├── index.ts
│   ├── main.ts
│   └── styles.css
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```
---

## 🧠 Features

- Type-safe product model using TypeScript classes
- Object-oriented programming (OOP) to manage product data
- Discount and tax calculation using utility functions
- DOM manipulation for browser-based product display
- Error handling via `try/catch` and custom error logic
- Async/await to fetch product data from an external API
- Transitioned from `console.log()` to browser UI rendering
- Custom fallback UI in case of API failure

---

## 🔧 Technologies Used

- TypeScript
- HTML5 + DOM API
- CSS
- [DummyJSON Products API](https://dummyjson.com/docs/products) 

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-system.git
   cd ecommerce-system
   ```

2. Install TypeScript:
   ```bash
   npm install -g typescript
   ```

3. Compile TypeScript:
   ```bash
   tsc
   ```

4. Open `index.html` in your browser.

---

## ✍️ Reflection

This project applies core TypeScript features and object-oriented programming (OOP) principles. A `Product` class was defined with strong typing to encapsulate product data and logic. Type annotations were used throughout to enforce type safety. Utility functions for discount and tax calculation demonstrate functional modularity and reusability.

Initially, `console.log()` was used to verify product data, but was later replaced with DOM manipulation to display results directly in the browser. This involved querying the DOM with `document.getElementById`, and dynamically updating the inner HTML of elements using template literals and JavaScript logic.

Asynchronous operations were handled with `async/await` and `fetch` to retrieve data from the DummyJSON API. A `try/catch` block was used to gracefully handle failed requests, and custom error classes were introduced to encapsulate errors more clearly. Debugging required catching both API issues and runtime rendering errors.

A core challenge was a mysterious `output.css` file appearing in the directory. After multiple `grep` runs confirmed that the file wasn’t referenced in any part of the codebase, it was safely deleted. This was likely the result of a misconfigured Tailwind or PostCSS build attempt during early setup, which was later replaced with direct `styles.css` for simplicity.

Additional challenges included configuring the `tsconfig.json`, ensuring the compiled JavaScript matched the DOM structure, and avoiding scope-related bugs. Higher-order functions like `.map()` and `.forEach()` were used to iterate and render multiple products efficiently. Closures were used implicitly when accessing variables within asynchronous functions that updated the DOM.

Overall, this project demonstrates an end-to-end understanding of TypeScript fundamentals, asynchronous programming, error handling, and DOM rendering for a real-world use case.

---

## 🧪 Grep Verification

To ensure `output.css` was not referenced, these checks were run:

```bash
grep -r 'output.css' .
grep -r 'output' .
grep -r 'tailwind' .
grep -r 'parcel' .
grep -r 'vite' .
```

All returned no references. It was concluded `output.css` could be deleted.

---

## 🧑🏿‍💻 Author

Created by [Yusuf Bolden](https://github.com/YusufBolden) as part of the Skills-Based Assessment (SBA 6) in Typescript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction.

Feedback and suggestions are welcome!

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
