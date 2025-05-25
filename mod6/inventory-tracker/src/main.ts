import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { sortByPrice, sortByName } from './utils/productSorter';

const inventory = [
  new PhysicalProduct('PHYS-001', 'Gaming Mouse', 19.99, 0.25),
  new DigitalProduct('DIGI-001', 'Photo Editor Pro', 79.99, 0),
  new PhysicalProduct('PHYS-002', 'Standing Desk', 399.99, 30),
  new DigitalProduct('DIGI-002', 'Online Course Access', 129.99, 0),
  new PhysicalProduct('PHYS-003', 'Printer', 149.99, 6.5)
];

// Apply 20% discount to all digital products
for (const product of inventory) {
  if (product instanceof DigitalProduct) {
    product.applyDiscount(20);
  }

  if (product instanceof PhysicalProduct) {
    product.applyBulkDiscount();
  }
}

console.log('\n***Sorted by Name***');
const nameSorted = sortByName([...inventory]);
for (const product of nameSorted) {
  console.log('_____________________________');
  console.log(product.displayDetails());
  console.log('Tax: $' + calculateTax(product));
  console.log('Total: $' + product.getPriceWithTax());
}

console.log('\n***Sorted by Descending Price***');
const priceSorted = sortByPrice([...inventory], false);
for (const product of priceSorted) {
  console.log('__________________________');
  console.log(product.displayDetails());
  console.log('Tax: $' + calculateTax(product));
  console.log('Total: $' + product.getPriceWithTax());
}
