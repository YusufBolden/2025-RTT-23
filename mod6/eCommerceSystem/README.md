# Product Listing Project

## Project Overview

This project is a simple product listing web application that fetches product data, applies discounts and taxes, and displays the final prices in a browser interface. It is built using TypeScript, JavaScript, and CSS with an emphasis on clean, modular code and asynchronous data handling.

---

## Dashboard Screenshot

![](./src/images/dashboard.png)

---

## Features

- Fetches product data asynchronously.
- Calculates discounted prices and tax amounts.
- Displays products dynamically in the browser DOM.
- Implements object-oriented programming principles.
- Handles errors gracefully using try/catch and custom error classes.
- Uses modern TypeScript features including async/await, closures, higher-order functions, and callbacks.

---

## How to Run

1. Clone the repository.
2. Open `index.html` in a modern browser.
3. View the products displayed dynamically in the browser UI.

---

## Reflection

This project leverages TypeScript's strong typing and OOP principles to define a `Product` class that encapsulates product data and related methods such as calculating discounts and taxes. TypeScript’s features ensured the code is type-safe and maintainable.

Asynchronous operations were managed using async/await, enabling non-blocking fetch requests. Promises were handled efficiently, with try/catch blocks providing comprehensive error management to avoid unhandled promise rejections.

Closures were utilized in helper functions to maintain state and provide clean interfaces. Higher-order functions and callbacks facilitated modular, reusable logic, especially in processing the fetched product arrays.

Initially, product information was logged to the console using `console.log()`. To improve the user experience, I replaced console outputs with DOM manipulation, dynamically creating and injecting HTML elements to display products directly in the browser interface.

Regarding styling, the project uses a single `styles.css` file linked in the HTML. I confirmed that an `output.css` file was generated at one point but is not currently referenced anywhere in the codebase. To verify this, I conducted a full project-wide search for any mentions of `output.css` across all files using `grep -r "output.css"` as follows:

```
grep -r "output.css" .
grep -r "output.css" ./src
grep -r "output.css" ./public
grep -r "output.css" ./dist
grep -r "output.css" ./index.html
grep -r "output.css" ./main.js
```

Finding no references, I deleted the `output.css` file to keep the project clean and avoid unnecessary clutter.

This choice was intentional over using bundlers like Parcel or Vite due to the simplicity of the project and to maintain minimal dependencies.

The UI was set up with careful CSS styling to ensure a clean layout. This involved iterative debugging and fixing console errors related to script loading and DOM manipulation timing to achieve a smooth and responsive user interface.

---

## .gitignore

The following entries are included to keep the repository clean:

```
node_modules/
dist/
.env
*.log
.DS_Store
.vscode/
```

---

## Author

Created by [Yusuf Bolden](https://github.com/YusufBolden) as part of the Skills-Based Assessment (SBA 6) in Typescript features, object-oriented programming (OOP) principles, asynchronous operations, error handling, and API interaction.

Feedback and suggestions are welcome!

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
