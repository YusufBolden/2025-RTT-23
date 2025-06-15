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
exports.DigitalProduct = void 0;
var Product_1 = require("./Product");
var DigitalProduct = /** @class */ (function (_super) {
    __extends(DigitalProduct, _super);
    function DigitalProduct(sku, name, price, fileSize) {
        var _this = _super.call(this, sku, name, price) || this;
        _this.fileSize = fileSize;
        return _this;
    }
    Object.defineProperty(DigitalProduct.prototype, "formattedFileSize", {
        get: function () {
            return "".concat(this.fileSize.toFixed(1), " MB");
        },
        enumerable: false,
        configurable: true
    });
    DigitalProduct.prototype.getPriceWithTax = function () {
        return this.basePrice; // No tax
    };
    DigitalProduct.prototype.applyDiscount = function (percent) {
        if (percent > 0 && percent <= 100) {
            this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
        }
    };
    DigitalProduct.prototype.displayDetails = function () {
        return _super.prototype.displayDetails.call(this) + ", File Size: ".concat(this.formattedFileSize);
    };
    return DigitalProduct;
}(Product_1.Product));
exports.DigitalProduct = DigitalProduct;
