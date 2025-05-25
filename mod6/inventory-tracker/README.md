# 🧾 Inventory Tracker

A beginner-friendly inventory management system built with TypeScript using object-oriented programming (OOP) principles. This project demonstrates inheritance, encapsulation, polymorphism, and interfaces in a real-world use case.

---

## 📦 Features

- Two types of products: **Physical** and **Digital**
- Automatically applies:
  - **Tax** (10% for physical, 0% for digital)
  - **Bulk discount** (if physical product is large)
  - **Optional percentage discount**
- Displays formatted product details and price breakdowns
- Supports sorting by **name** or **price**

---

## 🧠 Concepts Used

| Concept       | Where It Appears                                         |
| ------------- | -------------------------------------------------------- |
| Inheritance   | `PhysicalProduct` and `DigitalProduct` extend `Product`  |
| Encapsulation | `price` and other fields marked `protected` or `private` |
| Polymorphism  | One loop handles all products regardless of type         |
| Interfaces    | `Discountable` enforces shared `applyDiscount` method    |

---

## 🏗️ Project Structure

```
inventory-tracker/
├── src/
│ ├── models/
│ │ ├── Product.ts
│ │ ├── PhysicalProduct.ts
│ │ └── DigitalProduct.ts
│ ├── utils/
│ │ ├── taxCalculator.ts
│ │ └── productSorter.ts
│ └── main.ts
├── dist/ (generated after build)
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/your-username/inventory-tracker.git
cd inventory-tracker
```

### 2. Install dependencies

`npm install`

### 3. Compile TypeScript

`npx tsc`

### 4. Run the project

`node dist/main.js`

🛠️ How It Works

Each product (physical or digital) shares a base Product class but overrides how tax and discounts are handled.

    Physical products are taxed (10%) and can get a bulk discount if over 5 kg.

    Digital products are not taxed but can receive a regular percentage discount.

    Utility modules are used to keep logic clean and reusable.

💡 Example Output

```
📄 Name: E-Book
🆔 SKU: DIG-001
💵 Price (before tax): $19.99
🧾 Tax: $0.00
✅ Final Price: $17.99
💾 File Size: 700 MB
```

---

📦 Name: Laptop
🆔 SKU: PHYS-001
💵 Price (before tax): $999.99
🧾 Tax: $90.00
✅ Final Price: $989.99
⚖️ Weight: 2.5 kg

```

## 🧑‍💻 Author

This project was developed by **Yusuf Bolden** as part of a learning exercise in object-oriented programming with TypeScript.

Feedback and suggestions are welcome!

## 📚 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```
