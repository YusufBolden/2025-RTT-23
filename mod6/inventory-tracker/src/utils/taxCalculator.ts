import { Product } from '../models/Product';

export function calculateTax(product: Product): number {
  const taxAmount = product.getPriceWithTax() - product['basePrice'];
  return parseFloat(taxAmount.toFixed(2));
}
