📦 E-Commerce Dashboard

A TypeScript-based simulation of an e-commerce dashboard that fetches product catalog, reviews, and sales reports using asynchronous API calls. The application features robust error handling, custom error classes, and a retry mechanism for failed API calls—making it a great exercise in real-world asynchronous programming.
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
