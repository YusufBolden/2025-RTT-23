// Task 1: Array Manipulation Basics
// Create an empty shopping list
// let shoppingList = [];

// function addItem(item) {
//     shoppingList.push(item);
// }

// function removeLastItem() {
//     shoppingList.pop();
// }

// function displayList() {
//     console.log(shoppingList);
// }

// // Test cases
// addItem("Apples");
// addItem("Bananas");
// addItem("Oranges");

// displayList();  // ["Apples", "Bananas", "Oranges"]

// removeLastItem();

// displayList();  // ["Apples", "Bananas"]

// Task 2: Filter and Search an Array
// Create an empty shopping list
let shoppingList = [];

// Function to add an item to the shopping list (only if not already present)
function addItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
  } else {
    console.log(`${item} is already in the shopping list.`);
  }
}

// Function to remove the last item from the shopping list
function removeLastItem() {
  shoppingList.pop();
}

// Function to display all items in the shopping list
function displayList() {
  console.log(shoppingList);
}

// Function to filter items based on a search term (case-insensitive)
function filterItems(searchTerm) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(lowerCaseSearchTerm)
  );
}

addItem("Apples");
addItem("Bananas");
addItem("Oranges");
addItem("Bananas"); // "Bananas is already in the shopping list."

displayList(); // ["Apples", "Bananas", "Oranges"]

// Test cases
console.log(filterItems("an")); // ["Bananas", "Oranges"]
console.log(filterItems("apple")); // ["Apples"]
