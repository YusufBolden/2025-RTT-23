"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPrice = sortByPrice;
exports.sortByName = sortByName;
function sortByPrice(products, ascending = true) {
    return products.sort((a, b) => ascending ? a['basePrice'] - b['basePrice'] : b['basePrice'] - a['basePrice']);
}
function sortByName(products) {
    return products.sort((a, b) => a['displayName'].localeCompare(b['displayName']));
}
