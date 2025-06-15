"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
var Product_1 = require("./Product");
var PhysicalProduct = /** @class */ (function (_super) {
    __extends(PhysicalProduct, _super);
    function PhysicalProduct(sku, name, price, weight) {
        var _this = _super.call(this, sku, name, price) || this;
        _this.weight = weight;
        return _this;
    }
    Object.defineProperty(PhysicalProduct.prototype, "formattedWeight", {
        get: function () {
            return "".concat(this.weight.toFixed(2), " kg");
        },
        enumerable: false,
        configurable: true
    });
    PhysicalProduct.prototype.getPriceWithTax = function () {
        return parseFloat((this.basePrice * 1.1).toFixed(2)); // 10% tax
    };
    PhysicalProduct.prototype.applyDiscount = function (percent) {
        if (percent > 0 && percent <= 100) {
            this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
        }
    };
    PhysicalProduct.prototype.applyBulkDiscount = function () {
        if (this.weight > 5) {
            this.applyDiscount(15); // 15% off for bulky items
        }
    };
    PhysicalProduct.prototype.displayDetails = function () {
        return _super.prototype.displayDetails.call(this) + ", Weight: ".concat(this.formattedWeight);
    };
    return PhysicalProduct;
}(Product_1.Product));
exports.PhysicalProduct = PhysicalProduct;
