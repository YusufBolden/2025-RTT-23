"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(product) {
    const taxAmount = product.getPriceWithTax() - product['basePrice'];
    return parseFloat(taxAmount.toFixed(2));
}
