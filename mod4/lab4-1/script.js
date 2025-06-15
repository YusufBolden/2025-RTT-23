// Task 1: Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input";
  }

  const ensureCapilization = (str) =>
    str
      .split(/([-\s'])/g) // split by hyphen, space, or apostrophe and keep separators
      .map((part) =>
        /^[-\s']$/.test(part)
          ? part
          : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
      )
      .join("");

  return `${ensureCapilization(lastName)}, ${ensureCapilization(firstName)}`;
}

// Test cases
console.log(formatFullName("thomas", "O'NEIL")); // O'Neil, Thomas
console.log(formatFullName("d'aNGELO", "TURNer")); // Turner, D'Angelo
console.log(formatFullName("yuSuf", "BoLdEN")); // Yusuf Bolden

// Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price !== "number" ||
    isNaN(price) ||
    typeof quantity !== "number" ||
    isNaN(quantity) ||
    typeof taxRate !== "number" ||
    isNaN(taxRate)
  ) {
    return "invalid input";
  }
  // Calculates total cost with tax
  const totalCost = price * quantity * (1 + taxRate);
  // Returns total cost rounded to 2 decimal places
  return totalCost.toFixed(2);
}

// Test cases
console.log(calculateTotalCost(10, 4, 0.07)); // 42.80
console.log(calculateTotalCost(100, 5, 0.0625)); // 531.25
console.log(calculateTotalCost(5, 13, 0.0825)); // 70.36

// 3. Functions with Conditional Logic
function checkEligibility(age, isEmployed) {
  if (
    typeof age !== "number" ||
    isNaN(age) ||
    typeof isEmployed !== "boolean"
  ) {
    return "invalid input";
  }

  if (age > 18 && isEmployed) {
    return "You are eligible for the program";
  } else if (age > 18 && !isEmployed) {
    return "You are conditionally eligible for the program";
  } else {
    return "Sorry, you are not eligible for the program";
  }
}

// Test cases
console.log(checkEligibility(35, true)); // "You are eligible for the program"
console.log(checkEligibility(22, false)); // "You are onditionally eligible for the program"
console.log(checkEligibility(17, true)); // "Sorry, you are not eligible for the program"

// Task 4: Refactoring for Reusability
function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    typeof price !== "number" ||
    isNaN(price) ||
    typeof quantity !== "number" ||
    isNaN(quantity) ||
    typeof taxRate !== "number" ||
    isNaN(taxRate) ||
    typeof discount !== "number" ||
    isNaN(discount)
  ) {
    return "invalid input";
  }

  // Ensures the discount doesn't result in a negative price
  const discountedPrice = Math.max(price - discount, 0);
  const totalCost = discountedPrice * quantity * (1 + taxRate);
  return totalCost.toFixed(2);
}

console.log(calculateTotalCost(10, 2, 0.07));        // "21.40" (no discount)
console.log(calculateTotalCost(10, 2, 0.07, 2));     // "18.60" (after $2 discount)
console.log(calculateTotalCost(10, 2, 0.07, 15));    // "20.00" (discount > price, price becomes $0)
console.log(calculateTotalCost(50, 1, 0.1, 5));      // "49.50" (after $5 discount)
