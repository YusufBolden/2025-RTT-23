let shoppingList = [];

function addItem() {
  const itemInput = document.getElementById("itemInput");
  const item = itemInput.value.trim();

  // Only add item if it's not empty and not already in the list
  if (item && !shoppingList.includes(item)) {
    shoppingList.push(item);
    itemInput.value = ""; // Clear input field
    updateList();
  } else {
    alert("Please enter a valid item or it may already be in the list.");
  }
}

function removeLastItem() {
  shoppingList.pop();
  updateList();
}

function updateList() {
  const listContainer = document.getElementById("shoppingList");
  listContainer.innerHTML = ""; // Clear the list before updating

  shoppingList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add(
      "p-2",
      "bg-gray-100",
      "rounded-md",
      "border",
      "border-gray-300",
      "text-gray-800"
    );
    listContainer.appendChild(listItem);
  });
}

// Function to test cases
function runShoppingListTests() {
  shoppingList = []; // Reset list before testing
  console.log("✅ Test 1: Add 'Milk'");
  addItem("Milk");
  console.log(shoppingList); // ["Milk"]

  console.log("✅ Test 2: Add 'Bread' and 'Eggs'");
  addItem("Bread");
  addItem("Eggs");
  console.log(shoppingList); // ["Milk", "Bread", "Eggs"]

  console.log("🚫 Test 3: Add duplicate 'Milk'");
  addItem("Milk");
  console.log(shoppingList); // Reamins ["Milk", "Bread", "Eggs"]

  console.log("🚫 Test 4: Add empty string");
  addItem("   ");
  console.log(shoppingList); // Reamins ["Milk", "Bread", "Eggs"]

  console.log("✅ Test 5: Remove last item");
  removeLastItem();
  console.log(shoppingList); // ["Milk", "Bread"]

  console.log("✅ Test 6: Remove remaining items");
  removeLastItem();
  removeLastItem();
  console.log(shoppingList); // []

  console.log("🚫 Test 7: Remove from empty list");
  removeLastItem();
  console.log(shoppingList); // []

  console.log("✅ All test cases completed.");
}
