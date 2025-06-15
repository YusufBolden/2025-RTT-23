class Stack<T> {
  items: T[] = [];

  push(item: T): number {
    this.items.push(item);
    return this.items.length;
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  getItems(): T[] {
    return [...this.items];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}


console.log("=== Number Stack ===");
const numberStack = new Stack<number>();

console.log("Push 10:", numberStack.push(10)); // 1
console.log("Push 20:", numberStack.push(20)); // 2
console.log("Push 30:", numberStack.push(30)); // 3
console.log("Peek:", numberStack.peek());      // 30
console.log("Pop:", numberStack.pop());        // 30
console.log("Items:", numberStack.getItems()); // [10, 20]
console.log("Size:", numberStack.size());      // 2
console.log("Is Empty:", numberStack.isEmpty()); // false

console.log("\n=== String Stack ===");
const stringStack = new Stack<string>();
console.log("Push 'apple':", stringStack.push("apple"));   // 1
console.log("Push 'banana':", stringStack.push("banana")); // 2
console.log("Push 'cherry':", stringStack.push("cherry")); // 3
console.log("Peek:", stringStack.peek());       // cherry
console.log("Pop:", stringStack.pop());         // cherry
console.log("Items:", stringStack.getItems());  // ['apple', 'banana']
console.log("Size:", stringStack.size());       // 2
console.log("Is Empty:", stringStack.isEmpty()); // false