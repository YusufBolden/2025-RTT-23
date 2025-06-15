"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    get displayName() {
        return this.name;
    }
    get basePrice() {
        return this.price;
    }
    getPriceWithTax() {
        // Default tax 5%
        return parseFloat((this.price * 1.0475).toFixed(2));
    }
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
