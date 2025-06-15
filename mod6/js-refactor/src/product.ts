class Product {
    name: string;
    price: number;
    inStock: boolean;
  
  constructor(name: string, price: number, inStock: boolean = true) {
  this.name = name;
  this.price = price;
  this.inStock = inStock;
  }
  
  displayDetails(): string {
  return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
  }
  }
  
  const laptop = new Product("Laptop", 1200);
  const tv = new Product('Sony 55" HDTV', 799.99)
//   console.log(laptop.name);
//   console.log(laptop.price);
//   console.log(laptop.inStock);

//   console.log(laptop.name);
//   console.log(laptop.price);
//   console.log(laptop.inStock);

  console.log(laptop.displayDetails())
  console.log(tv.displayDetails())