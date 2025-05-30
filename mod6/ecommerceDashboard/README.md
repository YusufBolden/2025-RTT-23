📦 E-Commerce Dashboard

A TypeScript-based simulation of an e-commerce dashboard that fetches product catalog, reviews, and sales reports using asynchronous API calls. The application features robust error handling, custom error classes, and a retry mechanism for failed API calls simulating real-world asynchronous programming.

🚀 Features

    📡 Simulated asynchronous API calls using Promises

    🔗 Chained and sequential Promises

    🧼 Graceful error handling using .catch() and .finally()

    ⚠️ Custom error classes (NetworkError, DataError)

    🔁 Retry mechanism with configurable attempts and delay

    ✅ Fully written in TypeScript for type safety and clarity

📁 Project Structure

```
ecommerce-dashboard/
├── apiSimulator.ts       # Simulated API request logic
├── errors.ts             # Custom error classes
├── index.ts              # Main application logic
├── retryPromise.ts       # Utility for retrying failed Promises
├── tsconfig.json         # TypeScript configuration
├── package.json          # Project metadata and dependencies
└── README.md             # This document
```

🛠️ Getting Started

1. Clone the repo

```
git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard
```

2. Install dependencies

```
npm install
```

3. Compile TypeScript

```
npx tsc
```

4. Run the app

```
node dist/index.js
```

You should see logs in your terminal for product data, reviews, sales reports, and any errors with retry behavior.

📂 Example Output

```
Starting e-commerce dashboard data fetch...
Product Catalog:
┌─────────┬─────┬────────────┬───────┐
│ (index) │ id  │   name     │ price │
├─────────┼─────┼────────────┼───────┤
│    0    │  1  │  'Laptop'  │ 1200  │
│    1    │  2  │  'Mouse'   │   20  │
└─────────┴─────┴────────────┴───────┘

Reviews for Laptop:
┌─────────┬────────┬──────────────────────────────┐
│ (index) │ rating │          comment             │
├─────────┼────────┼──────────────────────────────┤
│    0    │   5    │ 'Excellent product!'         │
│    1    │   4    │ 'Very good, but could be...' │
└─────────┴────────┴──────────────────────────────┘
...

Finished attempting all API calls.
```

🧠 Concepts Practiced

    Promise-based API simulation

    Chaining async operations

    Retry logic via recursion and setTimeout

    Custom error design patterns

    TypeScript types and strict mode

🧪 Optional Extensions

    Add a frontend UI with React to visualize the data.

    Store failed attempts in a log file.

    Add Jest tests for API simulations and retry logic.

## Author

Created by Yusuf Bolden as part of a Promises and Error Handling labb assignment.

## License

This project is open-source and available under the [MIT License](LICENSE).
