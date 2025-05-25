export class Product {
    protected sku: string;
    protected name: string;
    protected price: number;
  
    constructor(sku: string, name: string, price: number) {
      this.sku = sku;
      this.name = name;
      this.price = price;
    }
  
    get displayName(): string {
      return this.name;
    }
  
    get basePrice(): number {
      return this.price;
    }
  
    getPriceWithTax(): number {
      // Default tax 5%
      return parseFloat((this.price * 1.0475).toFixed(2));
    }
  
    displayDetails(): string {
      return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
  }
  