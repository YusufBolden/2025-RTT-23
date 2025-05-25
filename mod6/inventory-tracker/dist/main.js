"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const productSorter_1 = require("./utils/productSorter");
const inventory = [
    new PhysicalProduct_1.PhysicalProduct('PHYS-001', 'Gaming Mouse', 19.99, 0.25),
    new DigitalProduct_1.DigitalProduct('DIGI-001', 'Photo Editor Pro', 79.99, 0),
    new PhysicalProduct_1.PhysicalProduct('PHYS-002', 'Standing Desk', 399.99, 30),
    new DigitalProduct_1.DigitalProduct('DIGI-002', 'Online Course Access', 129.99, 0),
    new PhysicalProduct_1.PhysicalProduct('PHYS-003', 'Printer', 149.99, 6.5)
];
// Apply 20% discount to all digital products
for (const product of inventory) {
    if (product instanceof DigitalProduct_1.DigitalProduct) {
        product.applyDiscount(20);
    }
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        product.applyBulkDiscount();
    }
}
console.log('\n***Sorted by Name***');
const nameSorted = (0, productSorter_1.sortByName)([...inventory]);
for (const product of nameSorted) {
    console.log('_____________________________');
    console.log(product.displayDetails());
    console.log('Tax: $' + (0, taxCalculator_1.calculateTax)(product));
    console.log('Total: $' + product.getPriceWithTax());
}
console.log('\n***Sorted by Descending Price***');
const priceSorted = (0, productSorter_1.sortByPrice)([...inventory], false);
for (const product of priceSorted) {
    console.log('__________________________');
    console.log(product.displayDetails());
    console.log('Tax: $' + (0, taxCalculator_1.calculateTax)(product));
    console.log('Total: $' + product.getPriceWithTax());
}
