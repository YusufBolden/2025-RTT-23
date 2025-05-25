"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get formattedWeight() {
        return `${this.weight.toFixed(2)} kg`;
    }
    getPriceWithTax() {
        return parseFloat((this.basePrice * 1.1).toFixed(2)); // 10% tax
    }
    applyDiscount(percent) {
        if (percent > 0 && percent <= 100) {
            this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
        }
    }
    applyBulkDiscount() {
        if (this.weight > 5) {
            this.applyDiscount(15); // 15% off for bulky items
        }
    }
    displayDetails() {
        return super.displayDetails() + `, Weight: ${this.formattedWeight}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
