import { Product } from '../models/Product';

export function sortByPrice(products: Product[], ascending: boolean = true): Product[] {
  return products.sort((a, b) =>
    ascending ? a['basePrice'] - b['basePrice'] : b['basePrice'] - a['basePrice']
  );
}

export function sortByName(products: Product[]): Product[] {
  return products.sort((a, b) => a['displayName'].localeCompare(b['displayName']));
}
