"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    get formattedFileSize() {
        return `${this.fileSize.toFixed(1)} MB`;
    }
    getPriceWithTax() {
        return this.basePrice; // No tax
    }
    applyDiscount(percent) {
        if (percent > 0 && percent <= 100) {
            this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
        }
    }
    displayDetails() {
        return super.displayDetails() + `, File Size: ${this.formattedFileSize}`;
    }
}
exports.DigitalProduct = DigitalProduct;
