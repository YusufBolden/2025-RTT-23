"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Product.prototype, "displayName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "basePrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getPriceWithTax = function () {
        // Default tax 5%
        return parseFloat((this.price * 1.0475).toFixed(2));
    };
    Product.prototype.displayDetails = function () {
        return "SKU: ".concat(this.sku, ", Name: ").concat(this.name, ", Price: $").concat(this.price.toFixed(2));
    };
    return Product;
}());
exports.Product = Product;
