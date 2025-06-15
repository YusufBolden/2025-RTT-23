# Dynamic Shopping Cart App

## Overview

This project is a dynamic shopping cart where users can add products with names, prices, and adjust the quantity. The total price is automatically updated as items are added or removed, and product details can be edited directly in the cart.

## Features

- **Add Products**: Add products with a name and price.
- **Quantity Adjustment**: Update quantity directly in the cart.
- **Price Calculation**: Automatically updates total price based on product quantity.
- **Remove Products**: Remove products from the cart, and total price updates accordingly.
- **Input Validation**: Ensures valid product name and price are provided.

## Installation

1. Navigate to this repository:
   ```bash
   cd 2025-RTT-23/main/mod5/lab5.1
   ```
2. Open the `index.html` file in your browser to run the application.

## How It Works

### Adding Products

- Enter a product name and price.
- Click "Add Product" to add the item to your cart.
- A quantity input and a remove button appear with each product.
- The total price is updated whenever a product is added.

### Removing Products

- Click the "Remove" button next to any product in the cart.
- The product is removed, and the total price is recalculated.

### Quantity Adjustment

- You can change the quantity of each product in the cart.
- The total price updates based on the new quantity.

### Input Validation

- If the product name or price is missing or invalid, an error message is displayed.
- The validation message automatically disappears after 3 seconds.

## Tech Stack

- **HTML5**: Structure of the page and elements.
- **CSS**: Tailwind CSS for responsive and modern design.
- **JavaScript**: Logic for dynamic updates, product management, and input validation.

## Reflection

### 💡 1. How did you dynamically create and append new elements to the DOM?

To dynamically add items to the cart, I used JavaScript’s `document.createElement()` to create individual DOM elements (`<li>`, `<span>`, `<input>`, and `<button>`). These elements were configured using properties like `.textContent`, `.dataset.price`, and `.value`, and styled using Tailwind CSS classes. Finally, they were assembled using `appendChild()` and added to the `#cart` `<ul>`. This modular approach made it easy to manage and update each cart item individually.

---

### 💰 2. What steps did you take to ensure accurate updates to the total price?

A dedicated `recalculateTotal()` function was used to compute the total price. It loops through each cart item using `querySelectorAll('#cart li')`, retrieves the unit price (`data-price`) and quantity, then calculates `price × quantity` for every item. The sum of all items is then updated in the `#total-price` span. This method ensures:

- The total is always accurate.
- It adapts to quantity changes and item removals.
- It avoids floating-point errors by formatting to two decimal places.

---

### 🚫 3. How did you handle invalid input for product name or price?

Before adding a product, validation checks are performed:

- The name must not be empty (`trim()`).
- The price must be a positive number (`parseFloat()` and `isNaN()`).

If the input is invalid:

- A styled error message is shown in the `#validation-message` element.
- The message is displayed using `style.display = 'block'` and hidden after 3 seconds using `setTimeout()`.
- The input is focused again for correction.

This ensures a smooth user experience and prevents invalid data from entering the cart.

---

### 🗑️ 4. What challenges did you face when implementing the remove functionality?

The main challenge was maintaining accurate totals after removing items. Instead of subtracting a guessed value, I called `recalculateTotal()` after every removal to ensure precision. Another issue was targeting the correct cart item — this was handled using `event.target.closest('li')` to ensure the correct DOM node was selected and removed. These solutions kept the cart logic clean and reliable.

---

## Future Improvements

- **Local Storage**: Store cart items in local storage so the cart persists even after the page refreshes.
- **User Authentication**: Allow users to create accounts and save their cart for future sessions.
- **Quantity Limits**: Add a limit to the maximum quantity per product.

## License

This project is open-source and available under the [MIT License](LICENSE).
