"use strict";
// Implement the function to handle both signatures
function formatInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return input.join(", ").toUpperCase();
    }
}
console.log(formatInput("hello")); // Outputs: "HELLO"
console.log(formatInput(["apple", "banana"])); // Outputs: "APPLE, BANANA"
