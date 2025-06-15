"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var PhysicalProduct_1 = require("./models/PhysicalProduct");
var DigitalProduct_1 = require("./models/DigitalProduct");
var taxCalculator_1 = require("./utils/taxCalculator");
var productSorter_1 = require("./utils/productSorter");
var inventory = [
    new PhysicalProduct_1.PhysicalProduct('PHYS-001', 'Gaming Mouse', 19.99, 0.25),
    new DigitalProduct_1.DigitalProduct('DIGI-001', 'Photo Editor Pro', 79.99, 0),
    new PhysicalProduct_1.PhysicalProduct('PHYS-002', 'Standing Desk', 399.99, 30),
    new DigitalProduct_1.DigitalProduct('DIGI-002', 'Online Course Access', 129.99, 0),
    new PhysicalProduct_1.PhysicalProduct('PHYS-003', 'Printer', 149.99, 6.5)
];
// Apply 20% discount to all digital products
for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
    var product = inventory_1[_i];
    if (product instanceof DigitalProduct_1.DigitalProduct) {
        product.applyDiscount(20);
    }
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        product.applyBulkDiscount();
    }
}
console.log('\n***Sorted by Name***');
var nameSorted = (0, productSorter_1.sortByName)(__spreadArray([], inventory, true));
for (var _a = 0, nameSorted_1 = nameSorted; _a < nameSorted_1.length; _a++) {
    var product = nameSorted_1[_a];
    console.log('_____________________________');
    console.log(product.displayDetails());
    console.log('Tax: $' + (0, taxCalculator_1.calculateTax)(product));
    console.log('Total: $' + product.getPriceWithTax());
}
console.log('\n***Sorted by Descending Price***');
var priceSorted = (0, productSorter_1.sortByPrice)(__spreadArray([], inventory, true), false);
for (var _b = 0, priceSorted_1 = priceSorted; _b < priceSorted_1.length; _b++) {
    var product = priceSorted_1[_b];
    console.log('__________________________');
    console.log(product.displayDetails());
    console.log('Tax: $' + (0, taxCalculator_1.calculateTax)(product));
    console.log('Total: $' + product.getPriceWithTax());
}
