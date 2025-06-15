"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPrice = sortByPrice;
exports.sortByName = sortByName;
function sortByPrice(products, ascending) {
    if (ascending === void 0) { ascending = true; }
    return products.sort(function (a, b) {
        return ascending ? a['basePrice'] - b['basePrice'] : b['basePrice'] - a['basePrice'];
    });
}
function sortByName(products) {
    return products.sort(function (a, b) { return a['displayName'].localeCompare(b['displayName']); });
}
